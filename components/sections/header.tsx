import { GithubIcon } from "lucide-react";
import Image from "next/image";
import { GitHub, XformerlyTwitter } from "../ui/icons";

export const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full h-80 relative">
        <Image
          src={"/images/Satoru Gojo purple hollow Jujutsu Kaisen.gif"}
          alt="banner-image"
          fill
          className="pointer-events-none select-none object-cover object-center"
          priority
        />
        <div className=" w-35 h-35 rounded-full absolute -bottom-20 left-8 overflow-hidden border dark:border-black z-10">
          <img src="/images/gojo.jpeg" alt="avatar-image" />
        </div>
      </div>
      <div className="mt-25 px-8 flex items-center justify-between">
        <span className="font-instrument-serif text-4xl ">Abhi Vignesh</span>
        <div className="flex items-center gap-x-3">
            <div className="size-8 p-2 flex items-center justify-center rounded-full bg-neutral-700 shadow inset-0">
                <GitHub width={18}/>
            </div>
            <div className="size-8 p-2 flex items-center justify-center rounded-full bg-neutral-700 shadow inset-0">
                <XformerlyTwitter width={15}/>
            </div>
        </div>
      </div>
    </div>
  );
};
