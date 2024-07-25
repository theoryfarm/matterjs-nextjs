import Document, { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

const googleAnalytics = process.env.NEXT_PUBLIC_GA_ID || ''

export default class MyDocument extends Document {
  render() {
    const keywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS

    return (
      <Html lang='pt-br'>
        <Head>
          <meta name='keywords' content={keywords} />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap'
            rel='stylesheet'
          />

          <script type='text/javascript' src='/gamepadtest.js'></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {googleAnalytics.length > 0 && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${googleAnalytics}', {
                        page_path: window.location.pathname,
                      });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
