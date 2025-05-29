import { FiArrowUpRight } from "react-icons/fi";
export const TextArrow = ({ text }: { text: string }) => {
    return (
        <span className="flex w-fit hover:bg-purple-500  items-center gap-1 rounded-md px-1 py-0.5 transition htext-white">
            {text.toLowerCase()}
            <FiArrowUpRight size={15}/>
        </span>
    )
}