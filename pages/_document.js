import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Juan Millord Portfolio" />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex,nofollow " />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: "Open Sans", sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
