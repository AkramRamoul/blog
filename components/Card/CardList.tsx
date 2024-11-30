import React from "react";
import Pagination from "../Pagination";
import Card from "./Card";
import { Separator } from "../ui/separator";
function CardList() {
  return (
    <div className="flex-[5]">
      <h1 className="text-4xl my-12 font-semibold">Recent posts</h1>
      <div>
        <Card />
        <Separator className="my-12" />
        <Card />
        <Separator className="my-12" />
        <Card />
        <Separator className="my-12" />
        <Card />
        <Separator className="my-12" />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
