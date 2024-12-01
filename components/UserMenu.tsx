"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const status = "authed";

const UserMenu = () => {
  const path = usePathname();

  return (
    <>
      {status === "notauthed" ? (
        <Link
          href="/login"
          className={cn(
            path === "/login"
              ? "bg-muted text-primary"
              : "hover:bg-muted hover:bg-opacity-75",
            "font-semibold px-3 py-1 rounded-md"
          )}
        >
          Login
        </Link>
      ) : (
        <>
          <Link
            href="/write"
            className={cn(
              path === "/write"
                ? "bg-muted text-primary"
                : "hover:bg-muted hover:bg-opacity-75",
              "font-semibold px-3 py-1 rounded-md"
            )}
          >
            Write
          </Link>
          <span className="cursor-pointer font-semibold">Logout</span>
        </>
      )}
    </>
  );
};

export default UserMenu;
