"use client";

import { Play } from "lucide-react";
import { put } from "@vercel/blob";

export const SongCard = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};
export const SongImage = ({ url }) => {
  async function handleClickPlay() {
    const audio = new Audio(url);
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  }
  return (
    <div
      onClick={handleClickPlay}
      className="h-14 w-14 flex items-center justify-center cursor-pointer"
    >
      <Play />
    </div>
  );
};
export const SongContent = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
export const SongTitle = ({ children }) => {
  return <div className="font-semibold">{children}</div>;
};
export const SongSubTitle = ({ children }) => {
  return <div className="text-sm">{children}</div>;
};
