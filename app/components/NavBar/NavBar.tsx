import React from "react";
import Image from "next/image";
import UserMenu from "../UserMenu";
import ThemeToggle from "../ThemeToggle";
import MobileMenu from "./MobileMenu";
import NavbarLinks from "./Link";
import Link from "next/link";

const socialMedia = [
  { src: "/facebook.png", alt: "Facebook" },
  { src: "/instagram.png", alt: "Instagram" },
  { src: "/youtube.png", alt: "YouTube" },
];
const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden lg:flex justify-center flex-1 items-center col-span-6 gap-x-2">
        {socialMedia.map((media) => (
          <Image
            key={media.alt}
            src={media.src}
            alt={`${media.alt} icon`}
            width={24}
            height={24}
          />
        ))}
      </div>

      {/* Logo */}
      <div
        className="
      flex
      flex-1 
      text-left
      font-bold 
      text-[24px]
      lg:text-[36px] 
      md:text-[32px] 
      md:text-center
    "
      >
        <Link href="/">Blog</Link>
      </div>

      {/* Links */}
      <div
        className="
      flex 
      items-center 
      justify-start
      gap-[20px] 
      flex-1 
      ml-10
      text-[20px] 
      lg:ml-0
      xl:text-[18px] 
      xl:gap-[15px] 
      sm:justify-center
    "
      >
        <ThemeToggle />
        <NavbarLinks />
        <UserMenu />
      </div>
      <div className="md:hidden ml-3">
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
