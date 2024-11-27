"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button onClick={() => signIn("google")}>Đăng nhập với Google</button>
    );
  }

  return (
    <div>
      {/* <p>Xin chào, {session.user?.name}</p> */}
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session.user?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      {/* <button onClick={() => signOut()}>Đăng xuất</button> */}
    </div>
  );
}
