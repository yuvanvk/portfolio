import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PlayAudio } from "./audio";
export const TextArrow = ({ text, href }: { text: string, href: string }) => {
    return (
        <Link onClick={PlayAudio} href={href} className="flex w-fit hover:bg-purple-500  items-center gap-1 rounded-md px-1 py-0.5 transition hover:text-white font-satoshi font-semibold italic">
            {text.toLowerCase()}
            <FiArrowUpRight size={15}/>
        </Link>
    )
}