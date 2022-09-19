import React from "react";
import PageFooter from "./components/footer";
import Pic from "../public/me.png";
import Image from "next/image";

const about = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="font-semibold xl:font-normal bg-zinc-900 mb-auto">
                <div className="xl:px-20 xl:pt-20 xl:items-start items-center flex flex-col justify-center px-5 pt-12 text-xs md:text-sm space-y-4 lg:space-y-6 text-white bg-zinc-900">
                    <h1 className="text-xl xl:text-2xl text-blue-500 font-bold">
                        About
                    </h1>
                    <span className="xl:mr-[30%]">
                        Hey! I'm a 17 y/o full-stack software developer from the
                        United Kingdom. I've been programming for just under 3
                        years; in which time I've picked up many different
                        skills, not exclusively programming based, but also more
                        fundamental lessons on how to tackle problems.
                    </span>
                    <span className="xl:mr-[30%]">
                        Aside from that, I'm a pretty normal teenager; I love to
                        travel, listen to music, go out with my friends, and of
                        course, struggle to manage my time...
                    </span>
                    <span className="xl:mr-[30%]">
                        I hope to continue building my knowledge of programming
                        in all aspects, in order to continue creating the most
                        scalable & efficient code possible.
                    </span>
                </div>
                <div className="xl:px-20 xl:items-start items-center flex flex-col justify-center px-5 pb-12 pt-6 text-xs xl:text-sm space-y-2 xl:space-y-4 text-white">
                    <Image
                        src={Pic}
                        width={800}
                        height={400}
                        className="block rounded-lg object-cover text-white"
                    />
                    <span className="not-sr-only text-neutral-500">
                        a picture of me and{" "}
                        <a
                            className="text-neutral-400 hover:text-blue-500 hover:cursor-pointer"
                            href="https://www.instagram.com/cosimo_kind/"
                            target={"_blank"}
                        >
                            cosimo
                        </a>{" "}
                        (london sept 2022)
                    </span>
                </div>
            </div>
            <div className="lg:h-18">
                <PageFooter />
            </div>
        </div>
    );
};

export default about;

// 👋
