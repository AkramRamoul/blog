import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug: postSlug }),
      },
      include: {
        user: true,
      },
    });

    // Always return a NextResponse object
    return NextResponse.json(comments || [], { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();

    if (!currentUser) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const newCommnet = await prisma.comment.create({
      data: { ...body, userEmail: currentUser.email },
    });
    revalidatePath("/");
    return NextResponse.json(newCommnet, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
};
