import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // TODO: Defaults favicons, generate your own from https://realfavicongenerator.net/. See the /public/favicons folder.
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/LogoFav.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/LogoFav.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/LogoFav.png"
        />
        <link rel="manifest" href="/favicons/LogoFav.png" />
        <link rel="mask-icon" href="/favicons/LogoFav.png" color="#f46444" />
        <link rel="shortcut icon" href="/favicons/LogoFav.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicons/LogoFav.png" />
        <meta name="theme-color" content="#f46444" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
