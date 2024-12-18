"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Contact",
    href: "contact",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Write",
    href: "/write",
  },
];

function NavbarLinks() {
  const path = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            path === link.href
              ? "bg-muted text-primary"
              : "hover:bg-muted hover:bg-opacity-75",
            "group flex items-center px-2 py-2 font-medium rounded-md"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavbarLinks;
