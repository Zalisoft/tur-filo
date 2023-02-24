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
        defaultTitle="Tur Filo"
        titleTemplate="%s | Tur Filo"
        description="Tur Filo Araç kiralama"
        canonical={`https://turfilokiralama.com${
          router.asPath === "/" ? "" : router.asPath
        }`}
        openGraph={{
          type: "website",
          url: `https://turfilokiralama.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
          locale: "en",
          title: "Tur Filo",
          description:
            "Tur Filo Araç kiralama",
          site_name: "Tur Filo",
        }}
        mobileAlternate={{
          media: "only screen and (max-width: 640px)",
          href: `https://turfilokiralama.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
        }}
        // twitter={{
        //   handle: "@example",
        //   site: "@example",
        //   cardType: "turfilokiralama",
        // }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
