import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.category.findMany();
  return new NextResponse(JSON.stringify(data), { status: 200 });
}
