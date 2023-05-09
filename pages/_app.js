import "@/styles/globals.css";
import {Sigmar_One, Poppins} from "next/font/google";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

config.autoAddCss = false;

const sigmar = Sigmar_One({
  subsets: ["latin"],
  variable: "--font-sigmar",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
});

export default function App({Component, pageProps}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className={`${sigmar.variable} ${poppins.variable} bg-black `}>
      <Head>
        <title>AlphaDrop</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
