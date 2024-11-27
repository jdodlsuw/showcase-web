"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
export default function AuthButtons() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="text-background">
        <Button onClick={() => signIn("google")} variant="outline-dark">
          <Icons.google className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session.user?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <p>Xin chào, {session.user?.name}</p>
          <button onClick={() => signOut()}>Đăng xuất</button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
