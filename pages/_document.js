import Document, { Html, Head, Main, NextScript } from "next/document";
import CloudflareAnalytics from "../components/CloudflareAnalytics";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <CloudflareAnalytics token="8c447bd674ef4bb18d4a2966442bc661" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
