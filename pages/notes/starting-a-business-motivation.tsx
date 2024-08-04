import React from "react";
import Head from "next/head";

const PostDetails = {
    title: "Motivation to start a business",
    date: "1/08/2024",
};

const Perfection = () => {
    return (
        <div className="bg-zinc-900">
            <Head>
                <title>Motivation for business</title>
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
                    'If you're going to try, go all the way. Otherwise, don't
                    even start' - Charles Bukowski
                </h2>
                <p>
                    Ever thought of starting a business? It seems fun, right?
                    Being your own boss and all that? I often have conversations
                    with friends about it, and I've been thinking about it
                    heavily lately, specifically the motivations people have to
                    start a business. I wanted to write something about it.
                </p>
                <h2 className="font-bold">A façade?</h2>
                <p>
                    Entrepreneurs aren't constrained by a traditional schedule,
                    which can seem quite glamorous from the outside. Having a
                    flexible schedule is indeed a significant benefit. However,
                    it's easy to overlook the work they do on a Saturday from 7
                    PM to 4 AM and instead focus on the three-hour lunch they
                    had on a Tuesday at 2 PM. Business is simple, for the most
                    part: the more you put in, the more you get out. So,
                    although someone may be able to work 15-hour weeks, they
                    will most likely be outperformed by someone working 80+ hour
                    weeks.
                </p>
                <h2 className="font-bold">Motivation</h2>
                <p>
                    There are two types of people who decide to start a
                    business, whether it's a startup or just a small side
                    hustle. The first type wants to emulate the 'ecom guru'
                    lifestyle: bottle service five times a week in the club,
                    driving a Lamborghini, etc. They wish to work two hours a
                    day to make their millions per year. The second type is
                    genuinely passionate about whatever business they want to
                    start. They want to put in 80-hour weeks because they love
                    what they do. Knowing both types of people, including some
                    of the 'gurus' seen on social media (who lie about their
                    lifestyle), I can say that only the second type will be
                    successful.
                </p>
                <h2 className="font-bold">Afterthought</h2>
                <p>
                    I'm actually writing this while waiting for some data
                    collection to be finished. After re-reading it, I really
                    want to stress the quote at the top. If you decide to start
                    a business, be ready to go all the way. Forget the money,
                    material success, and focus on building something you're
                    passionate about. Business should be about shipping great
                    products, not about the 'perceived' lifestyle that comes
                    with it.
                </p>
            </div>
        </div>
    );
};

export default Perfection;
