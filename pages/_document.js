import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>


        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />



        <link rel="preconnect" href="<https://app.snipcart.com>" />
				<link rel="preconnect" href="<https://cdn.snipcart.com>" />
				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
				/>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
					async
					src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
				></script>
      </body>
      <div
					hidden
					id="snipcart"
					data-api-key="YTMxODRjMzktMWQ0Ni00YTM4LTk0ZDctZTYzNmJjNDliNTVmNjM3ODY0NTQxMjU1NTcxMzY1"
					data-config-modal-style="side"
				></div>
    </Html>
  )
}
