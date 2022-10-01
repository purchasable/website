import React from "react";

export default function PageFooter() {
    return (
        <div className="items-center flex flex-col text-xs lg:text-sm font-semibold lg:font-normal mt-auto bg-zinc-900">
            <h2 className="sticky pb-8">
                <span>
                    {" "}
                    <a
                        href="/"
                        className="text-white hover:text-red-400"
                        rel="noreferrer"
                    >
                        {" "}
                        joseph.sh
                    </a>
                </span>{" "}
                <a
                    target="_blank"
                    href="https://github.com/purchasable"
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
    );
}
