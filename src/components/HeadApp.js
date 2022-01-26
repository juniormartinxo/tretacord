import Head from 'next/head'

function HeadApp(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;700&family=Teko:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
    </Head>
  )
}

export default HeadApp
