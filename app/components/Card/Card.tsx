import React from "react";
import Image from "next/image";
import Link from "next/link";
function Card() {
  return (
    <div className="mb-12 flex gap-12 items-center">
      <div className="relative flex-1 h-[350px] aspect-square hidden xl:flex">
        <Image src="/p1.jpeg" alt="post" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex-1 flex-col gap-[20px] flex">
        <div>
          <span className="text-muted-foreground">29.11.2024 - </span>
          <span className="text-[#DC143C] font-semibold">Category</span>
        </div>
        <Link href="#">
          <h1>Title of the post</h1>
        </Link>
        <p className="text-lg font-light text-muted-foreground max-w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          repellendus, quibusdam sequi doloremque quidem voluptatibus laudantium
          earum ducimus dolorum, voluptates omnis cumque temporibus maiores
          ipsam, id ullam quis unde fugit.
        </p>
        <Link href="#" className="border-b-2 max-w-fit py-1">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Card;
