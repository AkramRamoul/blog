import React from "react";
import Image from "next/image";
import UserMenu from "../UserMenu";
import ThemeToggle from "../ThemeToggle";
import MobileMenu from "./MobileMenu";
import NavbarLinks from "./Link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      {/* Social Media Icons */}
      <div className="hidden lg:flex justify-center flex-1 items-center col-span-6 gap-x-2">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
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
        BLOG
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
