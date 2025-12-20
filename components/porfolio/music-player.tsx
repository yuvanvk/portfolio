"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Spotify } from "../ui/icons";
import { MusicToggleButton } from "../ui/skiper-ui/skiper25";

type Track = {
  id: string;
  name: string;
  artists: string;
  image: string;
  audio: string;
};

export const MusicPlayer = () => {

  const [track, setTrack] = useState<Track | null>(null);

  const [isPlaying, setIsPlaying] = useState<"play" | "pause" | "resume" | "default">("default");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      const res = await axios.get("/api/spotify/");
      setTrack(res.data.track);
    };

    fetchTrack();
  }, []);

  const handlePlay = () => {
    if (isPlaying === "default") {
      setIsPlaying("play");
      audioRef.current?.play();
    } else if (isPlaying === "play") {
      setIsPlaying("pause");
      audioRef.current?.pause();
    } else if (isPlaying === "pause") {
      setIsPlaying("play");
      audioRef.current?.play();
    }
  };

  if (!track) {
    return null;
  }

  return (
    <>
    <div className="font-instrument-serif text-lg mt-10 md:mt-24">Hum for some time...</div>
      <div className="w-full px-4 py-3 bg-neutral-900 rounded-xl flex justify-between items-center relative border border-neutral-800 ">
        <div className="flex gap-x-2.5 items-center">
          <div className="size-12 relative rounded-full overflow-hidden ">
            <Image
              src={track.image}
              fill
              alt="music-image"
              className={"animate-spin"}
              style={{
                animationDuration: "4s",
                animationPlayState: isPlaying === "play" ? "running" : "paused",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[13px] font-medium font-sans tracking-tight ">
              {track.name}
            </div>
            <div className="text-[11px] text-neutral-400">
              by {track.artists}
            </div>
          </div>
          <audio
            className=""
            ref={audioRef}
            src={track.audio}
            loop
            // controls
          ></audio>
        </div>
        <div onClick={handlePlay}>
          <MusicToggleButton />
        </div>

        <div className="absolute -top-4 -right-1 md:-right-3 flex items-center gap-x-1 bg-neutral-800 px-1 py-1 rounded-sm border border-neutral-700">
          <Spotify />
          <div className="text-[10px] font-sans">Last played</div>
        </div>
      </div>
    </>
  );
};
