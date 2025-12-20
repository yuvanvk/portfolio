import Link from "next/link";

export const ProjectCard = ({
  name,
  description,
  time,
  link,
  playSound,
}: {
  name: string;
  description: string;
  time: string;
  link: string;
  playSound: () => void
}) => {
  return (
    <Link target="_blank" href={link} className="w-full" onMouseEnter={playSound}>
      <div className="flex items-center gap-x-2 px-3 py-4 hover:bg-neutral-900 rounded-xl cursor-pointer">
        <div className="text-[14px]">
          {name}{" "}
          <span className="text-[13px] text-neutral-500">{description}</span>
        </div>

        <div className="h-px bg-neutral-800 flex-1" />
        <div className="text-[13px] text-neutral-500">{time}</div>
      </div>
    </Link>
  );
};
