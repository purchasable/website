import React from "react";
import Head from "next/head";
import Link from "next/link";

const PostDetails = {
    title: "Transactional Economy",
    date: "04/08/2023",
};

const Perfection = () => {
    return (
        <div className="bg-zinc-900">
            <Head>
                <title>Transactional Economy</title>
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
                <h2 className="font-bold">The Transactional Economy</h2>
                <p>
                    First of all, I'm not sure if "transactional economy" is the
                    right term for the paradigm I'm referring to, so I'll
                    clarify: in today's world, many experiences that were
                    previously based on emotions and personal connections, have
                    been replaced by transactional experiences. For example:
                </p>
                <ol className="list-disc list-inside space-y-3">
                    <li>
                        Friendships are becoming more transactional, with social
                        media focusing on superficial interactions like liking
                        posts, rather than deeper, in-person connections.
                    </li>
                    <li>
                        Relationships are becoming more transactional, with
                        sites like tinder encouraging users to make quick
                        judgments based on superficial attributes, rather than
                        investing time to build meaningful connections.
                    </li>
                    <li>
                        Networking has become more transactional, with sites
                        like linkedin promoting the idea of '1 click
                        connections' rather than building genuine connections
                        with potential clients / partners.
                    </li>
                </ol>
                <p>
                    The list goes on, if you wish to see some more examples you
                    can prompt{" "}
                    <a
                        href="https://chat.openai.com"
                        target={"_blank"}
                        className="underline"
                    >
                        chatgpt
                    </a>{" "}
                    with the following
                </p>
                <p className="bg-black rounded-md py-1 px-2 font-mono">
                    what experiences in life have become more transactional over
                    the past 50 years, that were previously based on emotions
                </p>
                <h2 className="font-bold">Why did I write this post?</h2>
                <p>
                    Initially I started writing a post titled 'goals', in which
                    I wanted to outline the things that I wanted to change in
                    the world, but after writing the majority of that post about
                    this specific paradigm, I decided that I should probably
                    shift the topic focus. However over the past few months it
                    really has become a focal point for me, and something I
                    would love to disrupt.
                </p>
                <p>
                    One of the big things I've realized, is that I'm not alone
                    in this frustration: with many friends feeling the same way.
                    It feels like we're losing the 'personal touch' that made
                    certain experiences and relationships, significantly more
                    meaningful.
                </p>
                <p>
                    I want to focus my future projects on trying to bring back
                    personal connections where applicable, and I hope that some
                    other founders have the same goal.
                </p>
                <p>
                    If you are working on a project that has the same mission
                    and looking for investment, reach out at{" "}
                    <a
                        href="mailto:capital@joseph.sh"
                        className="underline"
                        target={"_blank"}
                    >
                        capital@joseph.sh
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Perfection;
