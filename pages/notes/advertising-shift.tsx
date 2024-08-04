import React from "react";
import Head from "next/head";
import Link from "next/link";

const PostDetails = {
    title: "Advertising Shift",
    date: "26/10/2023",
};

const Perfection = () => {
    return (
        <div className="bg-zinc-900">
            <Head>
                <title>Advertising Shift</title>
            </Head>
            <div className="py-20 px-10 xl:px-[34.5%] lg:px-[20%] space-y-4 text-[15px] bg-zinc-900 font-inter font-normal divide-zinc-700">
                <div className="space-y-1 pb-3">
                    <h1 className="leading-7 font-inter font-semibold text-[16px] tracking-tight lg:tracking-wide lg:mt-20 bg-zinc-900">
                        <a
                            className="text-gray-500 hover:text-neutral-600"
                            href="/notes"
                        >
                            ../
                        </a>{" "}
                        {PostDetails.title}
                    </h1>
                    <p className="text-gray-500 font-semibold text-[14px]">
                        {PostDetails.date}
                    </p>
                </div>
                <h2 className="font-bold">
                    *This post was inspired by some thinking after seeing{" "}
                    <a
                        href="https://x.com/agazdecki/status/1717546491135631848?s=20"
                        className="underline"
                        target="_blank"
                    >
                        this
                    </a>{" "}
                    X post
                </h2>
                <p>
                    I came across this post on X earlier today, and it got me
                    thinking about the shift in how marketing success is
                    achieved. I'm writing this as I wanted get my ideas down
                    somewhere.
                </p>
                <h2 className="font-bold underline">Previously</h2>
                <p>
                    I was thinking about how advertising success used to be
                    achieved; it's simple right? Pay for a bunch of billboards /
                    tv adverts / newspaper adverts. No matter how good or bad
                    your advert is, the same amount of people will see it. It's
                    a simple transaction, you pay the company, they get you
                    eyes.
                </p>
                <h2 className="font-bold underline">Present day</h2>
                <p>
                    Now with over 91% of medium & large companies using social
                    media for marketing, a crucial external factor has been
                    added: the algorithm. If your advert is good, more people
                    will see it, and reach will in turn, cost less.
                </p>
                <p>
                    In the startup space, I've frequently encountered the term
                    'Creative Advertising.' This technique aims to reduce
                    advertising costs by creating content that the company hopes
                    will go viral, as illustrated in the tweet mentioned
                    earlier.
                </p>
                <h2 className="font-bold underline">Thoughts</h2>
                <p>
                    I believe this shift is positive—provided social media
                    platforms maintain fairness in their algorithms. It
                    democratizes the opportunity for global reach, allowing even
                    small companies to compete without the hefty price tag
                    traditionally associated with wide reach. However, this
                    dependence on social media platforms could pose risks,
                    particularly if there are changes in policies or pricing in
                    the future.
                </p>
            </div>
        </div>
    );
};

export default Perfection;
