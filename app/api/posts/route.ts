import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const popular = searchParams.get("popular") === "true"; // Check for the popular param

  const POST_PER_PAGE = 2;

  // Query for non-popular posts
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (Number(page) - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy: {
      createdAt: "desc",
    },
  };

  try {
    if (popular) {
      // Return top 4 popular posts by views
      const popularPosts = await prisma.post.findMany({
        take: 4,
        orderBy: {
          views: "desc",
        },
        include: {
          user: true,
        },
      });
      return NextResponse.json({ posts: popularPosts });
    } else {
      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany({
          take: POST_PER_PAGE,
          skip: POST_PER_PAGE * (Number(page) - 1),
          where: {
            ...(cat && { catSlug: cat }),
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
        prisma.post.count({ where: query.where }),
      ]);
      return NextResponse.json({ posts, count });
    }
  } catch (error) {
    console.error(error, "Message_Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    console.log("Request Body:", body);

    if (!currentUser) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const newPost = await prisma.post.create({
      data: { ...body, userEmail: currentUser.email },
    });
    return NextResponse.json(newPost, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
};
