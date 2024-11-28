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
export default function AuthButton({ props }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button
        {...props}
        className="w-full"
        onClick={() => signIn("google")}
        variant="outline-dark"
      >
        <Icons.google className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={session.user?.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <p>{session.user?.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </PopoverContent>
    </Popover>
  );
}
