"use client"; 
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";

export default function BackBtn({buttonText, link}: {buttonText: string, link: string}) {
    return(
        <Link href={link} className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 my-[32px]">
            <FaAngleLeft />
            {buttonText}
        </Link>
    )
}