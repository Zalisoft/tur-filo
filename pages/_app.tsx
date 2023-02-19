import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  //TODO Change this SEO Defaults
  return (
    <div className="w-sceen overflow-hidden">
      <DefaultSeo
        defaultTitle="Next js React Web Project Template"
        titleTemplate="%s | Next js React Web Project Template"
        description="Next js React Web Project Template (Typescript, Sass, Tailwind Css, SVGR, Prettier , SEO and On-Demand ISR pre-configs and other generally used features and tools in production.)"
        canonical={`https://turfilokiralama.com${
          router.asPath === "/" ? "" : router.asPath
        }`}
        openGraph={{
          type: "website",
          url: `https://turfilokiralama.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
          locale: "en",
          title: "Next js React Web Project Template",
          description:
            "Next js React Web Project Template (Typescript, Sass, Tailwind Css, SVGR, Prettier , SEO and On-Demand ISR pre-configs and other generally used features and tools in production.)",
          site_name: "Next js React Web Project Template",
        }}
        mobileAlternate={{
          media: "only screen and (max-width: 640px)",
          href: `https://turfilokiralama.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
        }}
        twitter={{
          handle: "@example",
          site: "@example",
          cardType: "turfilokiralama",
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
