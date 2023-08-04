import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="absolute inset-0 bg-zinc-900 text-[#E5E5E5]">
            <Head>
                <link rel="icon" href="/blue.png" />
            </Head>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
