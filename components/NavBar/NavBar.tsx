import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "../UserMenu";
import ThemeToggle from "../ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      {/* Social Media Icons */}
      <div className="flex gap-3 flex-1 items-center justify-start">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>

      {/* Center Logo */}
      <div className="flex-1 text-center text-4xl font-bold flex items-center justify-center">
        BLOG
      </div>

      {/* Links and User Menu */}
      <div className="flex gap-5 flex-1 items-center justify-center text-xl font-semibold">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <UserMenu />
      </div>
    </div>
  );
};

export default NavBar;
