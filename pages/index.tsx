import type { NextPage } from "next";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Home: NextPage = () => {
    return (
        <div className="absolute inset-0 bg-zinc-900">
            <div className="lg:p-20 lg:items-start items-center flex flex-col justify-center p-20 text-xs lg:text-sm space-y-6">
                <h1 className="text-xl lg:text-2xl text-blue-400 font-bold">
                    Joseph Murphy
                </h1>
                <span>Full stack software & web3 dev</span>
                <span className="underline">Projects:</span>
                <div className="items-start space-y-1">
                    <li>
                        <a
                            target="_blank"
                            className="hover:cursor-pointer underline text-red-300 hover:text-white"
                            href="https://www.miragebots.io"
                        >
                            Mirage Software
                        </a>
                        <a> - founder & software developer</a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            className="hover:cursor-pointer underline text-red-300 hover:text-white"
                            href="https://ahiddensociety.com/"
                        >
                            HiddenSociety
                        </a>
                        <a> - software developer</a>
                    </li>
                </div>
            </div>
            <div className="items-center flex flex-col text-xs lg:text-sm">
                <h2 className="absolute bottom-7">
                    <span>joseph.sh</span>{" "}
                    <a
                        target="_blank"
                        href="https://github.com/alsojoseph"
                        className="text-neutral-500 hover:text-blue-500"
                        rel="noreferrer"
                    >
                        {" "}
                        – github
                    </a>
                    <a
                        target="_blank"
                        href="https://twitter.com/updated"
                        className="text-neutral-500 hover:text-blue-500"
                        rel="noreferrer"
                    >
                        {" "}
                        - twitter
                    </a>
                    <a
                        target="_blank"
                        href="mailto:contact@joseph.sh"
                        className="text-neutral-500 hover:text-blue-500"
                        rel="noreferrer"
                    >
                        {" "}
                        - email
                    </a>
                    <a
                        target="_blank"
                        href="https://blog.joseph.sh"
                        className="text-neutral-500 hover:text-blue-500"
                        rel="noreferrer"
                    >
                        {" "}
                        - blog
                    </a>
                </h2>
            </div>
        </div>
    );
};

export default Home;
