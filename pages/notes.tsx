import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const posts = [
    {
        year: 2022,
        posts: [
            {
                title: "A new website",
                date: "24/10",
                slug: "new-website",
            },
            // {
            //     title: "Running a business in school",
            //     date: "24/10",
            //     slug: "school-life-balance",
            // },
        ],
    },
];

const Notes: NextPage = () => {
    return (
        <div className="bg-zinc-900">
            <div className="py-20 px-10 xl:px-[34.5%] lg:px-[20%] space-y-12 text-[14px] bg-zinc-900 font-inter font-normal divide-zinc-700 divide-y">
                <h1 className="leading-7 font-inter font-semibold text-[16px] tracking-tight lg:tracking-wide lg:mt-20 bg-zinc-900">
                    <a
                        className="text-gray-500 hover:text-neutral-600"
                        href="/"
                    >
                        ../
                    </a>{" "}
                    Notes
                </h1>
                <div className="divide-y divide-zinc-700 text-gray-500">
                    {posts.map((post) =>
                        post.posts.length < 1 ? (
                            <div className="py-3">No posts for {post.year}</div>
                        ) : (
                            <div className="divide-y divide-zinc-700 text-gray-500 relative">
                                <div className="py-3">
                                    <span className="absolute">
                                        {post.year}
                                    </span>
                                    <div className="flex flex-row justify-between ml-[18%]">
                                        <a
                                            className="text-[#E5E5E5] hover:text-gray-500 truncate font-inter"
                                            href={`/notes/${post.posts[0].slug}`}
                                        >
                                            {post.posts[0].title}
                                        </a>
                                        <span className="text-gray-500">
                                            {post.posts[0].date}
                                        </span>
                                    </div>
                                </div>
                                {post.posts.slice(1).map((post) => (
                                    <div className="flex flex-row justify-between ml-[18%] py-3">
                                        <a
                                            className="text-[#E5E5E5] hover:text-gray-500 truncate"
                                            href={`/notes/${post.slug}`}
                                        >
                                            {post.title}
                                        </a>
                                        <span className="text-gray-500">
                                            {post.date}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )
                    )}
                    <div />
                </div>
            </div>
        </div>
    );
};

export default Notes;
