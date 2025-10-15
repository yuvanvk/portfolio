"use client";

import { useRouter } from "next/navigation";

export const Thumbnail = ({ imageUrl, link, redirectLink }: { imageUrl: string, link: string, redirectLink: string }) => {
    const router = useRouter();


  const handleOpenNewTab = () => {
    window.open(redirectLink, '_blank', 'noopener,noreferrer');
  };

    return <div onClick={handleOpenNewTab} className="group w-full relative">
        <img src={imageUrl} alt={imageUrl} className="rounded-xl"/>
        <span className="opacity-0 group-hover:opacity-100 absolute bottom-3 left-3 text-black transition-opacity duration-300 bg-white backdrop:blur-lg px-2 py-1 rounded-xl font-sans">
            {link}
        </span>
    </div>
}