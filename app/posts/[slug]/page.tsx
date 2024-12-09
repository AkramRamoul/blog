import Comments from "@/app/components/comments/Comments";
import Menu from "@/app/components/Menu/Menu";
import { FullPost } from "@/types";
import Image from "next/image";
import React from "react";
const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post: FullPost = await getData(slug);
  return (
    <div className="">
      <div className="flex items-center gap-[50px]">
        <div className="flex-1 ">
          <h1 className="text-xl mb-12 font-bold lg:text-6xl md:text-4xl sm:text-2xl  ">
            {post?.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={
                  post.user.image ??
                  `https://avatar.vercel.sh/${post?.user?.name}`
                }
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-lg text-muted-foreground">
                {post.user.name || post.userEmail}
              </span>
              <span className="font-light text-muted-foreground">
                {post.createdAt.toString().substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className="flex-1 relative h-[350px]  hidden lg:block ">
            <Image
              src={post.img}
              alt=""
              className="rounded-sm"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-5">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></div>
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePost;
