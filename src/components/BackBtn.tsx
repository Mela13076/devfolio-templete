"use client"; 
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";


export default function BackBtn({buttonText, link}: {buttonText: string, link: string}) {
    return(
        <Link href={link} >
            <motion.div 
            className="flex items-center gap-2 text-gray-700  dark:text-gray-300 hover:text-primary my-8" 
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}>
                <FaAngleLeft />
                {buttonText}
            </motion.div>     
        </Link>
    )
}