import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="lg:flex lg:h-screen lg:justify-center lg:items-center">
            <Head>
                <title>Joseph Murphy</title>
                <link rel="icon" href="/favicon.ico" />
                <meta content="Joseph Murphy" property="og:title" />
                <meta
                    content="Fullstack Software Developer"
                    property="og:description"
                />
                <meta content="https://joseph.sh" property="og:url" />
            </Head>
            <div className="py-16 lg:py-0 px-10 xl:px-[34.5%] lg:px-[20%] space-y-4 text-[15px] bg-zinc-900 lg:mb-[112px]">
                <img src="me.jpg" className="h-24 inline rounded-full" />
                <h1 className="leading-7 font-inter font-semibold text-[18px] tracking-tight lg:tracking-wide">
                    Joseph Murphy
                </h1>
                <p className="font-newsreader italic font-normal text-[17px]">
                    Constructing the future of the web.{" "}
                    <span className="font-inter not-italic font-normal leading-7 text-[15px]">
                        Entrepreneur & fullstack developer. Always learning and
                        improving.
                    </span>
                </p>
                <p className="font-inter font-normal leading-7 decoration-gray-500 decoration-2 underline-offset-2">
                    Currently ceo @{" "}
                    <a
                        href="https://www.miragebots.io"
                        target={"_blank"}
                        className="underline text-[#ffb3e4]"
                    >
                        mirage
                    </a>{" "}
                    & cto @{" "}
                    <a
                        href="https://ahiddensociety.com"
                        className="underline text-[#28F1A7]"
                        target={"_blank"}
                    >
                        hiddensociety
                    </a>
                    , with a wide range of responsibilities, ranging from team
                    management to fullstack development.
                </p>
                <p className="font-inter font-normal leading-7 decoration-gray-500 decoration-2 underline-offset-2">
                    Some notes that i've taken along my journey can be found{" "}
                    <a href="/notes" className="underline">
                        here
                    </a>{" "}
                </p>
                <p className="font-inter font-normal leading-7 decoration-gray-500 decoration-2 underline-offset-2">
                    Reach me at{" "}
                    <a
                        href="https://twitter.com/updated"
                        className="underline"
                        target={"_blank"}
                    >
                        @updated
                    </a>{" "}
                    or{" "}
                    <a
                        href="mailto:hi@joseph.sh"
                        className="underline"
                        target={"_blank"}
                    >
                        hi@joseph.sh
                    </a>{" "}
                </p>
                <p className="font-newsreader italic font-normal text-[17px]">
                    "Innovation distinguishes between a leader and a follower"{" "}
                    <span className="font-inter font-normal leading-7 decoration-gray-500 text-[15px] text-gray-500 not-italic">
                        - Steve Jobs
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Home;
