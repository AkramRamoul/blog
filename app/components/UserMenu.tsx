"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import UserNav from "./UserNav";
interface props {
  email: string;
  name: string;
  userImage: string | undefined;
}

const UserMenu = ({ email, name, userImage }: props) => {
  const path = usePathname();
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const loginClass = cn(
    path === "/login"
      ? "bg-muted text-primary"
      : "hover:bg-muted hover:bg-opacity-75",
    "font-semibold px-3 py-1 rounded-md"
  );

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={loginClass}>
          Login
        </Link>
      ) : (
        <>
          <UserNav
            name={name}
            email={email}
            userImage={userImage ?? `https://avatar.vercel.sh/whatever`}
          />
        </>
      )}
    </>
  );
};

export default UserMenu;
