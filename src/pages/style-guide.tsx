import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { ChangeThemeDropDown } from '../components/ChangeThemeDropDown/ChangeThemeDropDown'

export default function Page() {
  return (
    <>
      <Head>
        <title>Next.js Opinionated : Style Guide</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>Style Guide</div>
            <div className='text-sm'>Next.js Opinionated</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <div className='p-4'>
          <div className='flex justify-end w-full pb-10'>
            <ChangeThemeDropDown />
          </div>
          <div>
            <div className='items-end justify-start h-96 hero bg-primary rounded-box'>
              <div className='hero-content'>
                <div className='py-6 hero-text'>
                  <div className='py-2 font-bold text-9xl text-primary-content'>Aa</div>
                  <div className='py-2 text-5xl font-bold text-primary-content'>
                    Style Guide Demo
                  </div>
                  <p className='text-primary-content'>Omnis quo eveniet veniam quis odit.</p>
                </div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                Typography
              </div>
            </div>
            <div className='flex flex-col lg:space-x-6 lg:flex-row'>
              <div className='space-y-2 font-bold text-base-content'>
                <div className='text-9xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-8xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-7xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-6xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-5xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-4xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-3xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-2xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-lg'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-base'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-sm'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-xs'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
              </div>
              <div className='space-y-2 text-base-content'>
                <div className='text-9xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-8xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-7xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-6xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-5xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-4xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-3xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-2xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-lg'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-base'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-sm'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-xs'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                Brand Colors
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-10 text-xs font-semibold capitalize'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary' />
                <div className='py-4'>primary</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary-focus' />
                <div className='py-4'>primary focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary-content' />
                <div className='py-4'>primary content</div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-10 text-xs font-semibold capitalize'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary' />
                <div className='py-4'>secondary</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary-focus' />
                <div className='py-4'>secondary focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary-content' />
                <div className='py-4'>secondary content</div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-10 text-xs font-semibold capitalize'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent' />
                <div className='py-4'>accent</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent-focus' />
                <div className='py-4'>accent focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent-content' />
                <div className='py-4'>accent content</div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-10 text-xs font-semibold capitalize'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral' />
                <div className='py-4'>neutral</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral-focus' />
                <div className='py-4'>neutral focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral-content' />
                <div className='py-4'>neutral content</div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                Base Colors
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 text-xs font-semibold capitalize lg:grid-cols-5'>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-base-100' />
                <div className='py-4'>100</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-base-200' />
                <div className='py-4'>200</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-base-300' />
                <div className='py-4'>300</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-base-content' />
                <div className='py-4'>content</div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                State Colors
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 text-xs font-semibold capitalize lg:grid-cols-5'>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-info' />
                <div className='py-4'>info</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-success' />
                <div className='py-4'>success</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-warning' />
                <div className='py-4'>warning</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg rounded-box bg-error' />
                <div className='py-4'>error</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
