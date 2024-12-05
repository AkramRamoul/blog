import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (Number(page) - 1),
    });
    return NextResponse.json({ posts });
  } catch (error) {
    console.error(error, "Message_Error");
    return new NextResponse("Internal Erorr", { status: 500 });
  }
};
