import "@/styles/globals.css";
import {Sigmar_One, Poppins} from "next/font/google";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
  return (
    <main className={`${sigmar.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
