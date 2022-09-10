import React from "react";
import PageFooter from "./components/footer";
import { HiOutlineMail } from "react-icons/hi";
import { SiDiscord, SiTwitter } from "react-icons/si";

const contact = () => {
    return (
        <div className="font-semibold lg:font-normal">
            <div className="lg:p-20 lg:items-start items-center flex flex-col justify-center px-5 py-12 text-xs lg:text-sm space-y-6 text-white">
                <h1 className="text-xl lg:text-2xl text-blue-500 font-bold">
                    Contact
                </h1>
                <span className="lg:mr-[30%] p-3 lg:p-0">
                    If you want to talk with me about any business opportunities
                    / software development work, or just want to have a chat;
                    then you can reach me via one of the contact methods below.
                </span>
                <ul className="list-inside list-disc space-y-2">
                    <li className="flex space-x-2">
                        <HiOutlineMail className="h-6 w-6" />
                        <a
                            href="mailto:contact@joseph.sh"
                            className="text-red-400 hover:text-white"
                        >
                            contact@joseph.sh
                        </a>
                    </li>
                    <li className="flex space-x-2">
                        <SiDiscord className="h-6 w-6" />
                        <a
                            href="https://discord.com/users/451029281485619210"
                            className="text-red-400 hover:text-white"
                        >
                            joseph#0001
                        </a>
                    </li>
                    <li className="flex space-x-2">
                        <SiTwitter className="h-6 w-6" />
                        <a
                            href="https://twitter.com/updated"
                            className="text-red-400 hover:text-white"
                        >
                            @updated
                        </a>
                    </li>
                </ul>
            </div>
            <PageFooter />
        </div>
    );
};

export default contact;
