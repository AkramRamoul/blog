import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (Number(page) - 1),
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    return NextResponse.json({ posts, count });
  } catch (error) {
    console.error(error, "Message_Error");
    return new NextResponse("Internal Erorr", { status: 500 });
  }
};
