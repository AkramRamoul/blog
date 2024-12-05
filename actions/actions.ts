import prisma from "@/lib/prisma";

export const getCategory = async () => {
  try {
    const response = await prisma.category.findMany();
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
