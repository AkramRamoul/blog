import React from "react";
import Pagination from "../Pagination";
import Card from "./Card";
import { Post } from "@prisma/client";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
interface CardListProps {
  page: number;
  cat: string;
}

async function CardList({ page, cat }: CardListProps) {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

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
