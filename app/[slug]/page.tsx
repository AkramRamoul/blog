import Comments from "@/components/comments/Comments";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import React from "react";

function SinglePost() {
  return (
    <div className="">
      <div className="flex items-center gap-[50px]">
        <div className="flex-1 ">
          <h1 className="text-xl mb-12 font-bold lg:text-6xl md:text-4xl sm:text-2xl  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/LOGO.jpg"
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-lg text-muted-foreground">
                John Doe
              </span>
              <span className="font-light text-muted-foreground">
                30.11.2024
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-[350px]  hidden lg:block ">
          <Image
            src="/p1.jpeg"
            alt=""
            className="rounded-sm"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-12">
          <div className="">
            <p className="text-md font-light mb-4 sm:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              beatae itaque doloremque neque dolorem eveniet iure, debitis,
              expedita nisi dolores, repellat ullam esse sint perspiciatis eos
              officia saepe maiores. Dolorum?
            </p>
            <h2 className="text-xl font-bold">Lorem ipsum dolor sit amet.?</h2>
            <p className="text-md font-light mb-4 sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores similique maiores nobis ipsa. Eius, harum aliquam
              nesciunt ullam doloribus atque ex aperiam soluta deserunt, fugit
              placeat! Necessitatibus mollitia facere cupiditate?
            </p>
            <p className="text-md font-light mb-4 sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores similique maiores nobis ipsa. Eius, harum aliquam
              nesciunt ullam doloribus atque ex aperiam soluta deserunt, fugit
              placeat! Necessitatibus mollitia facere cupiditate?
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePost;
