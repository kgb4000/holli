import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.2.0/css/all.css"
          />
          <meta
            name="google-site-verification"
            content="outFGrWvqT_oGbQbVv9XooWxpm8G6nZrI9WwNb56hIw"
          />
          <meta
            name="facebook-domain-verification"
            content="i55dj20gvf42yxgud4z0twmyav2jya"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
