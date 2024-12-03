"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import UserNav from "./UserNav";

const UserMenu = () => {
  const path = usePathname();
  const { data, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const loginClass = cn(
    path === "/login"
      ? "bg-muted text-primary"
      : "hover:bg-muted hover:bg-opacity-75",
    "font-semibold px-3 py-1 rounded-md"
  );

  const writeClass = cn(
    path === "/write"
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
          <Link href="/write" className={writeClass}>
            Write
          </Link>
          <UserNav
            name={data?.user?.name as string}
            email={data?.user?.email as string}
            userImage={
              data?.user?.image ??
              `https://avatar.vercel.sh/${data?.user?.name}`
            }
          />
        </>
      )}
    </>
  );
};

export default UserMenu;
