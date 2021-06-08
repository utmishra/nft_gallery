import Document, { Html, Head, Main, NextScript } from 'next/document'

class Common extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="assets/fonts/NeueBit-Bold.otf"
            rel="stylesheet"
          />
          <meta name="description" content="NFT Gallery to view assets for any owner" />
          <link rel="icon" href="assets/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Common