import React from "react";

const PostDetails = {
    title: "Perfection",
    date: "30/07/2023",
};

const Perfection = () => {
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
                <h2 className="font-bold">
                    'The best is the enemy of the good' - Voltaire
                </h2>
                <p>
                    I've never been much of a perfectionist in most things that
                    I do. To be completely honest I didn't think I was a
                    perfectionist at all until the past week or so. But I've
                    been working on a new project, It's a logically complex
                    problem, involving lots of small technical architecture
                    decisions, and I've spent the past few days trying to
                    'perfect' my solution. This has, however proven difficult -
                    with it being such an open-ended problem.
                </p>
                <p>
                    I thought back to a quote I wrote down a few months ago,{" "}
                    <span className="font-bold">
                        'The best is the enemy of the good'
                    </span>
                    , and I realized how accurate this can be in problems where
                    the answer isn't discrete.
                </p>
                <h2 className="font-bold">The solution?</h2>
                <p>
                    Unfortunately I cannot offer a definitive solution, but in
                    each case it's worth posing the question to yourself of{" "}
                    <span className="underline">
                        if your focus in the micro is necessary to reach your
                        goal in the macro
                    </span>
                    , and in a case where it isn't, then stop wasting time!
                </p>

                <p>
                    So as I'm sitting here procrastinating on which of the
                    infinite possible solutions I'm to try next, I decided to
                    write down my thoughts.
                </p>
            </div>
        </div>
    );
};

export default Perfection;
