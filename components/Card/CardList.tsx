import React from "react";
import Pagination from "../Pagination";
import Card from "./Card";
function CardList() {
  return (
    <div className="flex-[5]">
      <h1 className="text-4xl my-12 font-semibold">Recent posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
