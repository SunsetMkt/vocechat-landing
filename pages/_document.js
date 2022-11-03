import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className="selection:bg-primary-300 selection:text-primary-25">
        <Main />
        <aside
          id="root_modal"
          className="pointer-events-none fixed top-0 left-0 w-full h-full z-[999]"
        ></aside>
        <NextScript />
      </body>
    </Html>
  );
}
