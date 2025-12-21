import Link from "next/link";
import { CircleArrowOutUpRight, Copy } from "lucide-react";

export const ContactCard = ({
  username,
  href,
  handleName,
  playSound
}: {
  username: string;
  href: string;
  handleName: string;
  playSound: () => void
}) => {


  return (
    <Link href={href} target="_blank" className="w-full" onMouseEnter={playSound}>
      <div className="flex items-center gap-x-2 max-w-2xl mx-auto px-2 py-2 rounded-xl hover:bg-neutral-900 tracking-tight w-full cursor-pointer">
        <div className="group px-2 py-2 hover:bg-neutral-800  rounded-lg">
          <Copy
            size={15}
            className="text-neutral-700 group-hover:text-neutral-400 transition-all "
          />
        </div>
        <p>{username}</p>
        <div className="flex-1 h-px bg-neutral-800" />
        <p className="lowercase">{handleName}</p>
        <div>
          <CircleArrowOutUpRight size={15} className="text-neutral-500" />
        </div>
      </div>
    </Link>
  );
};
