import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export const getCategory = async () => {
  try {
    const response = await prisma.category.findMany();
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getUserPosts = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }
  try {
    const response = await prisma.post.findMany({
      where: {
        id: user.id,
      },
      include: {
        comments: true,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
