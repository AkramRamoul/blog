"use client";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className="">
      <input
        placeholder="Title"
        className="p-12 text-6xl border-none outline-none bg-transparent
        
        "
      />
      <div className="flex gap-[20px] h-[700px] relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-transparent border-2 border-black flex items-center justify-center dark:border-[#ddd] aspect-square cursor-pointer "
        >
          <Image src="/plus.png" alt="add-button" width={16} height={16} />
        </button>

        {open && (
          <div className="flex gap-5 bg-background absolute z-[999] w-full left-12">
            <button className="w-9 h-9 rounded-full bg-transparent border-2 flex border-green-700 items-center justify-center aspect-square cursor-pointer ">
              <Image src="/image.png" alt="add-button" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent flex border-2 items-center justify-center aspect-square cursor-pointer border-green-700 ">
              <Image
                src="/external.png"
                alt="add-button"
                width={16}
                height={16}
              />
            </button>
            <button className="w-9 h-9  rounded-full bg-transparent border-2 flex items-center justify-center aspect-square cursor-pointer border-green-700">
              <Image src="/video.png" alt="add-button" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story here"
        />
      </div>
      <button
        className="absolute top-7 font-semibold right-8 py-[10px] px-[20px] bg-green-600
      rounded-md border-none text-white cursor-pointer"
      >
        Publish
      </button>
    </div>
  );
}

export default WritePage;
