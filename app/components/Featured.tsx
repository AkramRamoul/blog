import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Featured() {
  return (
    <div className="mt-7">
      <h1 className="text-xl font-light lg:text-6xl md:text-4xl sm:text-2xl ">
        <b>Hey this is Akram</b> read my post{" "}
      </h1>
      <div className="mt-14 flex gap-[50px] items-center">
        <div className="relative flex-1 h-[400px] hidden md:flex">
          <Image
            src="/p1.jpeg"
            alt="post-Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            alias! Nesciunt dicta deleniti quae praesentium maxime in optio
            dolorum dolores, aliquam nisi harum rem sequi placeat blanditiis
            accusamus doloremque nam?
          </p>
          <Button variant={"outline"} className="p-4 rounded-sm w-max">
            read more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
