import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="absolute inset-0 bg-zinc-900 text-[#E5E5E5]">
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
