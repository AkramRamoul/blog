import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-[30] mt-16 mb-10 flex items-center flex-col">
      <Image
        src="/neko_line.gif"
        unoptimized
        alt="footer"
        className="h-auto w-[300px] sm:w-[550px] max-w-full"
        width={550}
        height={30}
      />

      <div className="py-[20px] px-0 mt-[50px] flex items-center justify-between text-muted-foreground flex-col md:flex-row gap-0 md:gap-[50px]">
        <div className="flex-1 flex flex-col gap-[14px]">
          <div className="flex items-center gap-[10px] ">
            <div className="aspect-square rounded-full">
              <Image src="/LOGO.jpg" alt="Logo" width={50} height={50} />
            </div>
            <h1 className="font-bold text-2xl ">Blog</h1>
          </div>
          <p className="font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
            porro sequi, totam minima consequuntur, aspernatur deleniti vero
            repellendus dorales.
          </p>
          <div className="mt-3 flex gap-3">
            <Image src="/facebook.png" alt="" width={18} height={18} />
            <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </div>
        </div>
        <div className="flex flex-1 gap-[50px] lg:gap-[100px] w-full md:w-auto justify-between md:justify-end mt-5 md:mt-0">
          <div className="flex flex-col gap-2 font-light">
            <span className="font-bold text-lg">Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className="flex flex-col gap-2 font-light">
            <span className="font-bold text-lg">Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
          </div>
          <div className="flex flex-col gap-2 font-light">
            <span className="font-bold text-lg">Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Tiktok</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
