"use client";

import Link from "next/link";
import useSwr from "swr";
import axios from "axios";
import { FullPost } from "@/types";
import { ImSpinner2 } from "react-icons/im";
function MenuPosts() {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    if (res.status != 200) {
      const error = new Error(res.data.message);
      throw error;
    }
    return res.data.posts;
  };
  const { isLoading, data } = useSwr(`/api/posts?popular=true`, fetcher);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <ImSpinner2 className="animate-spin h-12 w-12" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8 mt-8 mb-14">
      {data.map((post: FullPost) => (
        <Link href="/" className="flex items-center gap-5" key={post.id}>
          <div className="flex-[4] flex flex-col gap-1">
            <span className="py-[3px] px-[8px] rounded-[10px] text-xs text-white w-fit bg-[#ff7857]">
              {post.catSlug}
            </span>
            <h3 className="text-lg font-semibold text-[#a6a6a6]">
              {post.title}
            </h3>
            <div className="text-xs text-muted-foreground">
              <span>{post.user.name} </span>
              <span className="text-gray-100">
                - {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPosts;
