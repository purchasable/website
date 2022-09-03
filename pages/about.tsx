import React from "react";
import PageFooter from "./components/footer";

const about = () => {
    return (
        <div className="font-semibold lg:font-normal">
            <div className="lg:p-20 lg:items-start items-center flex flex-col justify-center px-5 py-20 text-xs lg:text-sm space-y-6 text-white">
                <h1 className="text-xl lg:text-2xl text-blue-500 font-bold">
                    About
                </h1>
                <span className="lg:mr-[30%]">
                    Hey! I'm a 17 y/o full-stack software developer from the
                    United Kingdom. I've been programming for just under 3
                    years; in which time I've picked up many different skills,
                    not exclusively programming based, but also more fundamental
                    lessons on how to tackle problems.
                </span>
                <span className="lg:mr-[30%]">
                    Aside from that, I'm a pretty normal teenager; I love to
                    travel, listen to music, go out with my friends, and of
                    course, struggle to manage my time...
                </span>
                <span className="lg:mr-[30%]">
                    I hope to continue building my knowledge of programming in
                    all aspects, in order to create the most efficient &
                    scalable code possible.
                </span>
            </div>
            <PageFooter />
        </div>
    );
};

export default about;

// 👋
