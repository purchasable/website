import PageFooter from "./components/footer";

export default function Home() {
    return (
        <div className="font-semibold lg:font-normal">
            <div className="lg:p-20 lg:items-start items-center flex flex-col justify-center px-4 py-20 text-xs lg:text-sm space-y-[25px]">
                <h1 className="text-xl lg:text-2xl text-blue-500 font-bold">
                    Joseph Murphy
                </h1>
                <span>
                    Full stack software & web3 dev -{" "}
                    <a
                        className="text-blue-500 cursor-pointer border rounded-lg border-gray-700 border-opacity-60 p-[3.5px] bg-zinc-800"
                        href="/about"
                    >
                        about me ↗️
                    </a>
                </span>
                <span className="underline">Roles</span>
                <ul className="items-start space-y-1 list-disc list-inside">
                    <li>
                        <a
                            target="_blank"
                            className="hover:cursor-pointer underline text-red-400 hover:text-white"
                            href="https://www.miragebots.io"
                        >
                            Mirage Software
                        </a>
                        <span> - founder & software developer</span>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            className="hover:cursor-pointer underline text-red-400 hover:text-white"
                            href="https://ahiddensociety.com/"
                        >
                            HiddenSociety
                        </a>
                        <span> - software developer</span>
                    </li>
                </ul>
                <br />
                <span>
                    If you'd like to contact me, you can do so{" "}
                    <a
                        className="text-blue-500 cursor-pointer border rounded-lg border-gray-700 border-opacity-60 p-[3.5px] bg-zinc-800"
                        href="/contact"
                    >
                        here
                    </a>{" "}
                </span>
                <br />
                <span className="italic text-gray-500">
                    "Innovation distinguishes between a leader and a follower"{" "}
                    <span className="text-gray-400">- Steve Jobs</span>
                </span>
            </div>
            <PageFooter />
        </div>
    );
}
