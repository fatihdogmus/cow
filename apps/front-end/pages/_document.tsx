import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class _document extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/ceng-logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _document;
