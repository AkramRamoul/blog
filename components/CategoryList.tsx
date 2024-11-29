import React from "react";
import Link from "next/link";
import Image from "next/image";

const mockData = [
  {
    _id: "1",
    title: "Style",
    slug: "style",
    img: "/style.png",
  },
  {
    _id: "2",
    title: "Fashion",
    slug: "fashion",
    img: "/fashion.png",
  },
  {
    _id: "3",
    title: "Food",
    slug: "food",
    img: "/food.png",
  },
  {
    _id: "4",
    title: "Travel",
    slug: "travel",
    img: "/travel.png",
  },
  {
    _id: "5",
    title: "Culture",
    slug: "culture",
    img: "/culture.png",
  },
  {
    _id: "6",
    title: "Coding",
    slug: "coding",
    img: "/coding.png",
  },
];

const CategoryList = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-12">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-3">
        {mockData.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item._id}
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
                alt={item.title}
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
