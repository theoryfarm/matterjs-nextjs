/* eslint-disable no-console */
import Head from 'next/head'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import * as nextjsAuth0 from '@auth0/nextjs-auth0'
import Loading from '../components/Loading/Loading'
import Logo from '../components/LogoDefault/Logo'
import { FaGithub } from 'react-icons/fa'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS

  const { error, isLoading } = nextjsAuth0.useUser()
  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        {/* Open Graph */}
        <meta name='og:title' content={pageTitle} key='ogtitle' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content={pageUrl} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content={imageUrl} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' key='twcard' />
        <meta property='twitter:image' content={imageUrl} />
        <meta name='twitter:creator' content='' key='twhandle' />
      </Head>

      <Layout
        title={
          <div className='flex items-center flex-grow px-2 mx-2 space-x-3'>
            <a href='/'>
              <Logo />
            </a>
            <div className='text-sm font-bold'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <div className='relative min-h-screen hero bg-gradient-to-br from-secondary to-primary text-primary-content'>
          <div className='flex-col justify-between w-full max-w-6xl mt-10 mb-48 text-center hero-content'>
            <h1 className='py-4 mb-2 font-extrabold text-center font-title'>
              <div className='text-4xl font-bold lg:text-5xl'>Welcome to</div>
              <div className='text-5xl lg:text-7xl'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
            </h1>
            <div className='max-w-md'>
              <p className='mb-5'>
                A new Next.js boilerplate with TypeScript, TailwindCSS, Storybook, Jest, ESLint,
                Prettifier, React Hook Forms, Zod and React Query
              </p>
              <div className='flex justify-center space-x-2'>
                <a href='/style-guide' className='btn btn-ghost'>
                  Style Guide
                </a>
                <a href='/docs' className='btn btn-primary'>
                  Get Started
                </a>
              </div>
              <div className='absolute left-0 right-0 flex justify-center mt-2 bottom-20'>
                <IoIosArrowDown className='w-6 h-6 animate-bounce' />
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-md pb-20 mx-auto hero bg-base-100 md:max-w-full'>
          <div className='flex-col text-center hero-content'>
            <div>
              <h2 className='mt-20 mb-2 text-4xl font-extrabold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                A new boilerplate
              </h2>
              <h3 className='mt-5 text-2xl font-bold'>
                Most popular libraries based on JavaScript
              </h3>
              <p className='mb-5'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-5 space-x-2 md:grid-cols-3'>
              <div className='shadow-2xl card lg:card-side bg-primary text-primary-content'>
                <div className='card-body'>
                  <h2 className='card-title'>React Form Example</h2>
                  <p>
                    We got a page with few examples how to use our forms and how to validating it
                  </p>
                  <div className='justify-end card-actions'>
                    <Link href='/form-example'>
                      <a className='btn btn-primary'>
                        Click here
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='inline-block w-6 h-6 ml-2 stroke-current'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 5l7 7-7 7'
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='shadow-2xl card lg:card-side bg-primary text-primary-content'>
                <div className='card-body'>
                  <h2 className='card-title'>Typed-Fetch</h2>
                  <p>We created a standard typed-fetch using typeScript to manage API calls</p>
                  <div className='justify-end card-actions'>
                    <Link href='/typed-fetch-examples'>
                      <a className='btn btn-primary'>
                        Click here
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='inline-block w-6 h-6 ml-2 stroke-current'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 5l7 7-7 7'
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='shadow-2xl card lg:card-side bg-primary text-primary-content'>
                <div className='card-body'>
                  <h2 className='card-title'>Show Image</h2>
                  <p>A simple modal example using the SweetAlert2 library</p>
                  <div className='justify-end card-actions'>
                    <button
                      className='btn btn-primary'
                      onClick={async () => {
                        const myAlert = withReactContent(Swal)
                        await myAlert.fire({
                          title: 'Some Alert Title',
                          html: <img src='https://unsplash.it/600/300' />,
                          imageAlt: 'Custom image',
                          confirmButtonText: 'ok button',
                        })
                      }}
                    >
                      Click here
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block w-6 h-6 ml-2 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center w-full mt-6'>
              <a href='/docs' className='btn btn-secondary btn-wide'>
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className='w-full p-4 bg-neutral text-neutral-content'>
          <div className='pt-2 text-center opacity-60'>
            <p>© 2021 Next.js Opinionated Team.</p>
            <a
              className='btn btn-link '
              href='https://github.com/nextjs-opinionated/nextjs-opinionated'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub color='#fff' size={22} />
            </a>
          </div>
        </div>
      </Layout>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
