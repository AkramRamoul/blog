import prisma from "@/lib/prisma";

export const getPosts = async () => {
  try {
    const response = await prisma.post.findMany();
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
