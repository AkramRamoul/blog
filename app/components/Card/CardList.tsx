import React from "react";
import Pagination from "../Pagination";
import Card from "./Card";
import { Post } from "@prisma/client";

const getData = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.posts; // Extracting 'posts' from the response
};

async function CardList({ page }: { page: number }) {
  const posts: Post[] = await getData(page);

  return (
    <div className="flex-[5]">
      <h1 className="text-4xl my-12 font-semibold">Recent posts</h1>
      <div>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
