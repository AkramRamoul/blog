import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";
function Card({ post }: { post: Post }) {
  return (
    <div className="mb-12 flex gap-12 items-center">
      {post.img && (
        <div className="relative flex-1 h-[350px] aspect-square hidden xl:flex">
          <Image
            src={post.img!}
            alt="post"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <div className="flex-1 flex-col gap-[20px] flex">
        <div>
          <span className="text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString()} {" - "}
          </span>
          <span className="text-[#DC143C] font-semibold capitalize">
            {post.catSlug}
          </span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className="text-2xl font-semibold">{post.title}</h1>
        </Link>
        <div
          className="text-lg font-light text-muted-foreground max-w-full"
          dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 15) }}
        ></div>
        <Link
          href={`/posts/${post.slug}`}
          className="border-b-2 max-w-fit py-1"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Card;
