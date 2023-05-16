// this file is optional to set an attribute to HTML element itself,
// or extra entry points/elements which could be used with React portal
// setting correct metadata is important for all search enginges and additional services like i.e. facebook picture grab etc.
// additionally we can use React Portals (render a component anywhere, and use in other place)
// to work with extra hook i.e. notifications

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <Main />
            <NextScript />
            <div id="notifications"></div>
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
