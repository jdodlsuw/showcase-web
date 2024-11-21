"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Play, SkipBack, SkipForward, Pause } from "lucide-react";
import { useRef, useState } from "react";
export function SiteFooter() {
  const audioRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const playMusic = () => {
    console.log("gg");
    if (!audioRef.current) {
      return;
    }
    console.log(isPlay);
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay(!isPlay);
  };
  return (
    <footer className="border-t border-border/40 flex gap-4">
      <div className="w-14 h-14 relative m-4">
        <Image fill src="/music-bg.jpg" alt="music background" />
      </div>
      <div className="flex items-center gap-4">
        <SkipBack color="#ffffff" />
        <div onClick={playMusic}>
          {isPlay ? <Pause color="#ffffff" /> : <Play color="#ffffff" />}
        </div>
        <SkipForward color="#ffffff" />
      </div>
      <audio ref={audioRef} src="/music.mp3" />
    </footer>
  );
}
