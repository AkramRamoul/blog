import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@prisma/client";
import { getCategory } from "@/actions/actions";

const CategoryList = async () => {
  const Data = await getCategory();
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-12">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-3">
        {Data.map((item: Category) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item.id}
            className={`flex w-full items-center gap-2 capitalize h-20 justify-center rounded-lg lg:w-[15%] md:w-[25%] sm:w-[45%] ${
              item.slug === "style"
                ? "bg-[#57c4ff31]"
                : item.slug === "fashion"
                ? "bg-[#da85c731]"
                : item.slug === "food"
                ? "bg-[#7fb88133]"
                : item.slug === "travel"
                ? "bg-[#ff795736]"
                : item.slug === "culture"
                ? "bg-[#ffb04f45]"
                : item.slug === "coding"
                ? "bg-[#5e4fff31]"
                : ""
            } `}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.slug}
                width={42}
                height={42}
                className="rounded-full aspect-square object-cover"
              />
            )}
            <span className="font-semibold text-lg">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
