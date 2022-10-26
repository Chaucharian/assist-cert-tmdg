import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import React, { FC, useEffect, useLayoutEffect } from 'react'
import Dom from '@/components/layout/dom'
import dynamic from 'next/dynamic'
import { Props as CanvasProps } from '@react-three/fiber/dist/declarations/src/web/Canvas'
import { GlobalCSS, theme } from '@/styles'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { styledConsoleMessage } from '@/helpers/console'
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const defaultTitle = 'Marplacode - beauty experiences'
const url = 'https://marplacode.com'
const description =
  'Attendance certification generator for TrimarchiDG TMDG 20 años'
const author = 'Marplacode'

const queryClient = new QueryClient()

const Header = ({ title = defaultTitle }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Software Engineer,Product Manager,Project Manager,Digital Agency, UI/UX, web development, developers, budget designs, budget development'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        {/* 
      Social Media Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={'/img/og_image.png'} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />

        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          color='#000000'
          href='/icons/safari-pinned-tab.svg'
        />
        <link rel='apple-touch-startup-image' href='/startup.png' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Hotjar Tracking Code for https://tmdg.marplacode.com -->
            <script>
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3219803,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            </script>
                  `,
          }}
        />
      </Head>
    </>
  )
}

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

export interface R3FComponent {
  canvasProps?: CanvasProps
  r3f?: (props: any) => JSX.Element
}

export type R3FComponentType = React.Component<any> | R3FComponent

interface AppProps {
  Component: R3FComponent
  pageProps: any
}

const App: FC<AppProps> = ({
  Component,
  pageProps = { title: defaultTitle },
}) => {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  useLayoutEffect(() => {
    styledConsoleMessage('Hi! 👋  We enjoy crafting 🔨 things on Marplacode;')
  }, [])

  return (
    <>
      <Header title={pageProps.title} />
      {/* theme not work inside canvas */}
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {/* @ts-ignore */}
          <Component {...pageProps} />
          {Component?.r3f && (
            <LCanvas {...Component?.canvasProps}>
              {Component.r3f(pageProps)}
            </LCanvas>
          )}
        </QueryClientProvider>

        <GlobalCSS />
      </ThemeProvider>
    </>
  )
}

export default App
