import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
function Comments() {
  const authed = "authed";
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold text-muted-foreground mb-[30px]">
        Comments
      </h1>
      {authed === "authed" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            placeholder="write a comment ..."
            className="p-[20px] w-full border-gray-500 border-2"
          ></textarea>
          <Button className="border-none cursor-pointer text-white bg-green-500 py-4 px-5 hover:bg-green-600">
            Post
          </Button>
        </div>
      ) : (
        <Link href="/login" className="border-b-2 max-w-fit py-1">
          Login to comment
        </Link>
      )}
      <div className="mt-12">
        <div className="mt-12">
          <div className="flex items-center gap-[20px] mb-5">
            <div className="w-[50px] h-[50px] relative ">
              <Image
                src="/LOGO.jpg"
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200 aspect-square"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[500] text-lg text-muted-foreground">
                John Doe
              </span>
              <span className="font-light text-muted-foreground">
                30.11.2024
              </span>
            </div>
          </div>
          <p className="text-md font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            impedit dolore et at quae tempora accusamus cum, itaque ea!
          </p>
        </div>
        <div className="mt-12">
          <div className="flex items-center gap-[20px] mb-5">
            <div className="w-[50px] h-[50px] relative ">
              <Image
                src="/LOGO.jpg"
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200 aspect-square"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[500] text-lg text-muted-foreground">
                John Doe
              </span>
              <span className="font-light text-muted-foreground">
                30.11.2024
              </span>
            </div>
          </div>
          <p className="text-md font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            impedit dolore et at quae tempora accusamus cum, itaque ea!
          </p>
        </div>
        <div className="mt-12">
          <div className="flex items-center gap-[20px] mb-5">
            <div className="w-[50px] h-[50px] relative ">
              <Image
                src="/LOGO.jpg"
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200 aspect-square"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[500] text-lg text-muted-foreground">
                John Doe
              </span>
              <span className="font-light text-muted-foreground">
                30.11.2024
              </span>
            </div>
          </div>
          <p className="text-md font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            impedit dolore et at quae tempora accusamus cum, itaque ea!
          </p>
        </div>
        <div className="mt-12">
          <div className="flex items-center gap-[20px] mb-5">
            <div className="w-[50px] h-[50px] relative ">
              <Image
                src="/LOGO.jpg"
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200 aspect-square"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[500] text-lg text-muted-foreground">
                John Doe
              </span>
              <span className="font-light text-muted-foreground">
                30.11.2024
              </span>
            </div>
          </div>
          <p className="text-md font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            impedit dolore et at quae tempora accusamus cum, itaque ea!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
