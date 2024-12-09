"use client";

import React from "react";
import useSwr from "swr";
import Pagination from "../Pagination";
import Card from "./Card";
import { Post } from "@prisma/client";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";

interface CardListProps {
  page: number;
  cat: string;
}

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

function CardList({ page, cat }: CardListProps) {
  const POST_PER_PAGE = 2;

  // Use SWR to fetch posts and count
  const { data, error, isLoading } = useSwr(
    `/api/posts?page=${page}&cat=${cat || ""}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  // Handle loading and error states
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <ImSpinner2 className="animate-spin h-12 w-12" />
      </div>
    );
  if (error) return <div className="flex-[5]">Failed to load data</div>;

  const { posts, count } = data;

  const hasPreviousPage = POST_PER_PAGE * (page - 1) > 0;
  const hasNextPage = POST_PER_PAGE * page < count;

  return (
    <div className="flex-[5]">
      <h1 className="text-4xl my-12 font-semibold">Recent posts</h1>
      <div>
        {posts.map((post: Post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        page={page}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </div>
  );
}

export default CardList;
