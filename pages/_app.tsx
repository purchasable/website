import "../styles/globals.css";
import type { AppProps } from "next/app";

function PersonalWebsite({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default PersonalWebsite;
