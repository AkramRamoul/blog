import React from "react";
import Link from "next/link";
const cats = [
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
function Catlist() {
  return (
    <div className="flex gap-8 mt-8 mb-14 flex-wrap">
      {cats.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          key={item._id}
          className={`py-[10px] px-[25px] rounded-[10px] text-sm ${
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
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Catlist;
