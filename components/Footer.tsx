import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-auto mt-16 mb-10 flex justify-center">
      <Image
        src="/neko_line.gif"
        alt="footer"
        className="max-w-[550px] h-auto"
        width={550}
        height={30}
      />
    </footer>
  );
};

export default Footer;
