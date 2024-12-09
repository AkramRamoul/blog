"use client";

import Image from "next/image";
import Comments from "./comments/Comments";
import Menu from "./Menu/Menu";
import axios from "axios";
import useSWR from "swr";
import { ImSpinner2 } from "react-icons/im";

function SinglePost({ slug }: { slug: string }) {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    if (res.status !== 200) {
      throw new Error(res.data.message || "Failed to fetch data");
    }
    return res.data;
  };

  const { data, isLoading } = useSWR(`/api/posts/${slug}`, fetcher);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <ImSpinner2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-xl mb-12 font-bold lg:text-6xl md:text-4xl sm:text-2xl">
            {data?.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={
                  data.user.image ??
                  `https://avatar.vercel.sh/${data?.user?.name}`
                }
                alt="UserImage"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-lg text-muted-foreground">
                {data.user.name || data.userEmail}
              </span>
              <span className="font-light text-muted-foreground">
                {new Date(data.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        {data.img && (
          <div className="flex-1 relative h-[350px] hidden lg:block">
            <Image
              src={data.img}
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
          <div dangerouslySetInnerHTML={{ __html: data.desc }} />
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePost;
