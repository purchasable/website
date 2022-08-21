import type { NextPage } from "next";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Home: NextPage = () => {
    return (
        <div className="absolute inset-0 bg-zinc-900">
            <div className="items-center flex flex-col justify-center h-full">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-blue-400 to-red-500">
                    <h1 className="text-4xl md:text-7xl font-black py-2">
                        Joseph Murphy
                    </h1>
                </div>
                <h2 className="text-slate-300 text-sm font-medium lg:text-xl py-2">
                    Full Stack Software & Web3 Developer
                </h2>
                <div className="flex items-center space-x-4 py-2">
                    <a
                        href="https://github.com/alsojoseph"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <SiGithub className="h-8 w-8 text-slate-300" />
                        <span className="sr-only">GitHub Profile</span>
                    </a>

                    <a
                        href="https://twitter.com/updated"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter Profile"
                    >
                        <SiTwitter className="h-8 w-8 text-slate-300" />
                        <span className="sr-only">Twitter Profile</span>
                    </a>

                    <a
                        href="mailto:contact@joseph.sh"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email"
                    >
                        <SiGmail className="h-8 w-8 text-slate-300" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <footer className="absolute bottom-5 text-slate-300 cursor-pointer space-x-4 font-medium">
                    <Link href="https://blog.joseph.sh">Blog</Link>
                </footer>
            </div>
        </div>
    );
};

export default Home;
