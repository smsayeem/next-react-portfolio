import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="A site for my programing portfolio"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: "ZCOOL XiaoWei", serif;
          }
        `}</style>
      </html>
    );
  }
}
export default MyDocument;
