'use client'

/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { getRandom } from '../utils/getRandom'
import router from 'next/router'

const { Bodies, Engine, Events, Mouse, MouseConstraint, Render, Runner, World } = Matter

declare global {
  interface Window {
    engine: Matter.Engine
    runner: Matter.Runner
  }
}

function Gamepad() {
  const [axes, setAxes] = useState(null)

  useEffect(() => {
    const onGamePad = (e) => {
      setAxes(e?.detail?.axes.map((a) => (Math.abs(a * 100) < 6 ? 0 : (a * 100).toFixed(2))))
    }

    window.addEventListener('gamepadhit', onGamePad)

    return () => {
      window.removeEventListener('gamepadhit', onGamePad)
    }
  }, [])

  return (
    <div className='Gamepads'>
      <h1>Gamepads</h1>
      {JSON.stringify(axes)}
    </div>
  )
}

export default function Page() {
  const canvas = useRef(null)
  const world = useRef<Matter.World>()
  const engineRef = useRef<Matter.Engine>()
  const runnerRef = useRef<Matter.Runner>()
  const [objectsCount, objectsCountSet] = useState(0)
  const [showGamePad, setShowGamePad] = useState(false)
  const [fps, fpsSet] = useState(0)

  useEffect(function onFirstMount() {
    setShowGamePad(true)
  }, [])

  useEffect(() => {
    if (runnerRef.current) {
      Runner.stop(runnerRef.current as Matter.Runner)
      Engine.clear(engineRef.current as Matter.Engine)
    }

    createWorld()

    return () => {
      console.log('clear')
      Runner.stop(runnerRef.current as Matter.Runner)
      Engine.clear(engineRef.current as Matter.Engine)
      router.reload()
    }
  }, [canvas, world])

  const WIDTH = 1200
  const HEIGHT = 700

  function createWorld() {
    const engine = Engine.create()
    engineRef.current = engine
    world.current = engine.world

    console.log('createWorld')

    // create a renderer
    const render = Render.create({
      canvas: canvas.current || undefined,
      engine,
      options: {
        width: WIDTH,
        height: HEIGHT,
        background: '#666',
        showCollisions: false,
        showVelocity: false,
        showAxes: false,
        wireframes: false,
      } as Matter.IRendererOptions,
    }) as Matter.Render & { mouse: any }

    const wallBorderWidth = 10
    const wallLength = 500
    let ballCollections: any[] = []

    var collider = Bodies.rectangle(0, HEIGHT - 100, WIDTH * 2, wallBorderWidth, {
      isStatic: true,
      isSensor: true,
      render: {
        fillStyle: '#ffcccc',
        opacity: 0.5,
      },
    })

    for (let index = 0; index < 13; index++) {
      const element = 'test'
      let wall = Bodies.rectangle(index * 100, HEIGHT, wallBorderWidth, wallLength, {
        isStatic: true,
        chamfer: { radius: 5 },
        render: {
          fillStyle: '#000000',
        },
      })
      World.add(engine.world, wall)

      if (index > 0) {
        let sensor = Bodies.rectangle(index * 100 + 50, HEIGHT - 100, 100, wallBorderWidth, {
          isStatic: true,
          isSensor: true,
          label: index.toString(),
          render: {
            // add index converted to hex
            fillStyle: '#' + (index * 500).toString(16).substring(0, 4),
            opacity: 0.5,
            //visible: false,
          },
        })

        World.add(engine.world, sensor)
        ballCollections[sensor.id] = []
      }
    }

    // walls
    World.add(engine.world, [
      // celling
      //Bodies.rectangle(WIDTH / 2, HEIGHT / 4, wallLength, wallBorderWidth, { isStatic: true }),
      // ground
      // Bodies.rectangle(WIDTH / 2, HEIGHT - HEIGHT / 4, wallLength * 0.7, wallBorderWidth, {
      //   isStatic: true,
      // }),

      // ground 2
      Bodies.rectangle(0, HEIGHT, WIDTH * 2, wallBorderWidth, {
        isStatic: true,
      }),

      //sensor
      //collider,

      // Bodies.rectangle(
      //   WIDTH / 3 + WIDTH / 3,
      //   HEIGHT - HEIGHT / 2,
      //   wallBorderWidth,
      //   wallLength * 0.7,
      //   {
      //     isStatic: true,
      //   }
      // ),
      // Bodies.rectangle(WIDTH / 3, HEIGHT - HEIGHT / 2, wallBorderWidth, wallLength * 0.6, {
      //   isStatic: true,
      // }),
    ])

    // MOUSE
    const mouse = Mouse.create(render.canvas)
    render.mouse = mouse
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.5,
        render: {
          visible: true,
        },
      } as Matter.Constraint,
    })

    World.add(engine.world, mouseConstraint)

    let mouseIsDragging = false
    let setIntervalId: NodeJS.Timer

    Matter.Events.on(mouseConstraint, 'startdrag', () => {
      mouseIsDragging = true
    })
    Matter.Events.on(mouseConstraint, 'enddrag', () => {
      mouseIsDragging = false
    })
    Matter.Events.on(mouseConstraint, 'mousedown', (ev) => {
      if (mouseIsDragging === false) {
        setIntervalId = setInterval(() => {
          createBalls(ev.source.mouse.position)
        }, 1)
      }
    })
    Matter.Events.on(mouseConstraint, 'mouseup', () => {
      clearInterval(setIntervalId)
    })

    Events.on(engine, 'collisionStart', function (event) {
      var pairs = event.pairs

      for (var i = 0, j = pairs.length; i != j; ++i) {
        var pair = pairs[i]

        if (pair.bodyA.isSensor) {
          pair.bodyB.render.fillStyle = pair.bodyA.render.fillStyle
          if (
            ballCollections[pair.bodyA.id] &&
            !ballCollections[pair.bodyA.id].find((f) => f == pair.bodyB.id)
          ) {
            ballCollections[pair.bodyA.id].push(pair.bodyB.id)
            if (ballCollections[pair.bodyA.id].length > 60) {
              //remove first 60 elements
              ballCollections[pair.bodyA.id].slice(0, 60).forEach((id) => {
                engine.world.bodies.find((b) => b.id == id) &&
                  World.remove(engine.world, engine.world.bodies.find((b) => b.id == id)!)
              })

              ballCollections[pair.bodyA.id].splice(0, 60)
            }
          }

          //console.log(ballCollections)
        }

        // if (pair.bodyA === collider) {
        //   pair.bodyB.render.strokeStyle = colorA;
        // } else if (pair.bodyB === collider) {
        //   pair.bodyA.render.strokeStyle = colorA;
        // }
      }
    })

    //
    //
    // After Update
    //
    //
    Events.on(engine, 'afterUpdate', (ev) => {
      // const time = engine.timing.timestamp
      objectsCountSet(ev.source.world.bodies.length)

      ev.source.world.bodies.forEach((b) => {
        if (b.position.x > WIDTH || b.position.x < 0 || b.position.y > HEIGHT) {
          World.remove(engine.world, b)
        }
      })
      fpsSet(Math.abs(runner.fps))
    })

    function createBalls(positionXY?: Matter.IMousePoint) {
      if (!positionXY) {
        return
      }

      World.add(
        engine.world,
        Bodies.circle(
          positionXY.x + getRandom(15) || WIDTH / 2,
          positionXY.y + getRandom(15) || HEIGHT / 2,
          7,
          {
            restitution: 0.9,
            friction: 0.0001,
            render: {
              fillStyle: '#fff',
            },
          }
        )
      )
    }

    //createBalls()

    Render.run(render)

    // create runner
    const runner = Runner.create() as Matter.Runner & {
      correction: number
      counterTimestamp: number
      delta: number
      // deltaHistory: number
      deltaMax: number
      deltaMin: number
      deltaSampleSize: number
      enabled: boolean
      fps: number
      frameCounter: number
      frameRequestId: number
      isFixed: boolean
      timePrev: number
      timeScalePrev: number
    }
    runnerRef.current = runner
    // run the engine
    Runner.run(runner, engine)

    // add To Global
    window.Matter = Matter
    window.engine = engine
    window.runner = runner
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <canvas className='bg-gray-700' ref={canvas} />
      <div className='mx-3 border select-none border-indigo-600p-3'>
        bodies count: {objectsCount}
      </div>
      <div className='mx-3 border select-none border-indigo-600p-3'>fps: {fps}</div>
      {showGamePad && <Gamepad />}
      <h2 id='start'>Press a button on your controller to start</h2>
    </div>
  )
}
