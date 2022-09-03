import "../styles/globals.css";
import type { AppProps } from "next/app";

function PersonalWebsite({ Component, pageProps }: AppProps) {
    return (
        <main className="absolute inset-0 bg-zinc-900 text-white">
            <Component {...pageProps} />
        </main>
    );
}

export default PersonalWebsite;
