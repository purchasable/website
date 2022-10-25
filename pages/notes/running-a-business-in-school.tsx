import React from "react";

const PostDetails = {
    title: "Running a business in school",
    date: "25/10/2022",
};

const NewWebsite = () => {
    return (
        <div className="bg-zinc-900">
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
                <p>
                    Running a business alongside going to school is one of the
                    hardest things I've done; I started my first company back
                    when I was 15, so after 2 years, I thought I would share my
                    experience and advice for anyone in similar situations.
                </p>
                <h2 className="font-bold">Education is more important</h2>
                <p>
                    I know this sounds cliche, but it's true. I spent a year
                    focusing only on business, in my case it was programming for
                    my first company (
                    <a
                        href="https://www.miragebots.io"
                        target={"_blank"}
                        className="underline text-[#ffb3e4]"
                    >
                        mirage
                    </a>
                    ), telling myself that making money was more important than
                    my education, completely forgetting that my education was
                    what got my here in the first place, by building the
                    fundamentals of my problem solving ability. Working harder
                    at school will only develop your skills further, and this
                    shouldn't be forgotten.
                </p>
                <h2 className="font-bold">Dealing with stress</h2>
                <p>
                    If you're stressed you need to take a step back, nothing is
                    worse for you than letting yourself be stressed. School can
                    be a great solution for this, and something that should be
                    taken advantage of, whilst you're in school you should
                    forget about your business, and focus on challenging your
                    mind, the more you do this the less stressed you will feel,
                    as it forces other things to be on your mind.
                </p>
                <h2 className="font-bold">Don't sacrifice sleep</h2>
                <p>
                    I always thought that I could get by on 4 hours of sleep a
                    night, thats what I told myself for the year I did it when I
                    was 16, looking back on it; I'm not sure what I was
                    thinking. I know it's tricky when there's always stuff to
                    do, but you need to discipline yourself to get enough sleep.
                    A lack of sleep will not only affect your cognitive ability,
                    but also other aspects of your life; such as your social
                    interactions - which is much more important than money.
                </p>
                <h2 className="font-bold">Final thoughts</h2>
                <p>
                    I know this was short, I just wanted to give the most
                    important advice I could think of. If you are struggling
                    running a business at school and want to have a chat, feel
                    free to{" "}
                    <a href="mailto:hi@joseph.sh" className="underline">
                        email me
                    </a>
                    ; and by no means have I perfected the balance yet, but my
                    grades are infinitely better than they were last year, I'm
                    alot less stressed, and alot less moody in the mornings; so
                    I think I'm on the right track ;)
                </p>
            </div>
        </div>
    );
};

export default NewWebsite;
