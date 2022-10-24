import React from "react";

const PostDetails = {
    title: "New Website",
    date: "24/10/2022",
};

const NewWebsite = () => {
    return (
        <div className="bg-zinc-900">
            <div className="py-20 px-10 xl:px-[34.5%] lg:px-[20%] space-y-8 text-[15px] bg-zinc-900 font-inter font-normal divide-zinc-700">
                <div className="space-y-3">
                    <h1 className="leading-7 font-inter font-semibold text-[16px] tracking-tight lg:tracking-wide lg:mt-20 bg-zinc-900">
                        <a
                            className="text-gray-500 hover:text-neutral-600"
                            href="/notes"
                        >
                            ../
                        </a>{" "}
                        {PostDetails.title}
                    </h1>
                    <p className="text-gray-500 font-bold text-[15px]">
                        {PostDetails.date}
                    </p>
                </div>
                <p>
                    So... another new website, I know... it's not the best use
                    of my of my time. I never thought I would care so much about
                    something like a personal website, truth be told I never
                    used to care in the slightest about frontend projects, it
                    was always "if it works it doesn't matter how it looks",
                    typical backend engineer I guess; but there is something to
                    be said for having a website that you can be proud of, so
                    here we are with my third iteration.
                </p>
                <p>
                    As with the previous two, I built this site with Next.js &
                    React along with Tailwind for styling. I wanted to make the
                    site as professional as possible, which was what the
                    previous two were missing, hence the more 'dull' colour
                    schemes. I decided to include this notes section for when I
                    want to write about something, I'm not sure how often I will
                    use it, but I'm sure I will find a use for it at some point.
                </p>
            </div>
        </div>
    );
};

export default NewWebsite;
