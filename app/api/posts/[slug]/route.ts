import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    const slug = params.slug;
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        user: true,
      },
    });
    if (!post) {
      return new NextResponse("Not Found", { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error, "Message_Error");
    return new NextResponse("Internal Erorr", { status: 500 });
  }
};