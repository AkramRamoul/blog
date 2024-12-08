"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import useSwr from "swr";
import { useSession } from "next-auth/react";

import axios from "axios";
import { FullComment } from "@/types";
import { ImSpinner2 } from "react-icons/im";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  if (res.status != 200) {
    const error = new Error(res.data.message);
    throw error;
  }
  return res.data;
};
function Comments({ postSlug }: { postSlug: string }) {
  const { isLoading, data } = useSwr(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const authed = useSession()?.status;
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold text-muted-foreground mb-[30px]">
        Comments
      </h1>
      {authed === "authenticated" ? (
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
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <ImSpinner2 className="animate-spin h-12 w-12" />
          </div>
        ) : (
          data.map((comment: FullComment) => (
            <div className="mt-12" key={comment.id}>
              <div className="flex items-center gap-[20px] mb-5">
                <div className="w-[50px] h-[50px] relative ">
                  <Image
                    src={
                      comment.user.image ??
                      `https://avatar.vercel.sh/${comment?.user?.name}`
                    }
                    alt="UserImage"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full border-gray-200 aspect-square"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-[500] text-lg text-muted-foreground">
                    {comment.user.name}
                  </span>
                  <span className="font-light text-muted-foreground">
                    {comment.createdAt.toString().substring(0, 10)}
                  </span>
                </div>
              </div>
              <p className="text-md font-[300]">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
