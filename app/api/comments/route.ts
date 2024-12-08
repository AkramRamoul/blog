import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(slug && { postSlug: slug }),
      },
      include: {
        user: true,
      },
    });
    if (!comments) {
      return [];
    }
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
};
