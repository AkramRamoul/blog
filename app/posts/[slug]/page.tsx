import React from "react";
import SinglePost from "@/app/components/SinglePost";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return <SinglePost slug={slug} />;
}

export default Page;
