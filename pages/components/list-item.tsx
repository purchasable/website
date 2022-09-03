import React from "react";
import type { IconType } from "react-icons";

export default function ListItem({
    text,
    icon,
    link,
}: {
    text: string;
    icon: IconType;
    link?: string;
}) {
    return (
        <li className="flex space-x-2">
            <span>{icon({ className: "h-6 w-6" })}</span>
            {link ? (
                <a href={link} className="text-red-400 hover:text-white">
                    {text}
                </a>
            ) : (
                <span>{text}</span>
            )}
        </li>
    );
}
