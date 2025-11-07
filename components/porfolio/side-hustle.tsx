"use client";
import Image from "next/image";
import { toast } from "sonner";

export const SideHustle = () => {
  return (
    <div className="my-10 space-y-5 ">
      <div className="font-instrument-serif text-xl">Agency</div>
      <div className="relative w-full h-[208px]">
        <Image
          onClick={() => toast("Coming soon...")}
          alt="slavan-banner"
          fill
          src={"/slavan.png"}
          className="w-full h-52 object-cover rounded-xl cursor-pointer lg:aspect-video aspect-square"
        />
      </div>
    </div>
  );
};
