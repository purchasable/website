import React from "react";
import PageFooter from "./components/footer";
import { ListItem } from "./components/list-item";
import { HiOutlineMail } from "react-icons/hi";
import { SiDiscord, SiTwitter } from "react-icons/si";

const contact = () => {
    return (
        <div className="font-semibold lg:font-normal">
            <div className="lg:p-20 lg:items-start items-center flex flex-col justify-center px-5 py-20 text-xs lg:text-sm space-y-6 text-white">
                <h1 className="text-xl lg:text-2xl text-blue-500 font-bold">
                    Contact
                </h1>
                <span className="lg:mr-[30%] p-3 lg:p-0">
                    If you want to talk with me about any business opportunities
                    / software development work, then you can reach me via one
                    of the contact methods below.
                </span>
                <ul className="list-inside list-disc space-y-2">
                    <ListItem
                        icon={HiOutlineMail}
                        text="contact@joseph.sh"
                        link="mailto:contact@joseph.sh"
                    />
                    <ListItem
                        text="joseph#0001"
                        icon={SiDiscord}
                        link="https://discord.com/users/451029281485619210"
                    />
                    <ListItem
                        icon={SiTwitter}
                        text="@updated"
                        link="https://twitter.com/updated"
                    />
                </ul>
            </div>
            <PageFooter />
        </div>
    );
};

export default contact;
