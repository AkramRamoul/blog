"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className="">
      <input placeholder="Title" />
      <div>
        <Button onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="add-button" width={16} height={16} />
        </Button>
        {open && (
          <div>
            <Button onClick={() => setOpen(!open)}>
              <Image src="/plus.png" alt="add-button" width={16} height={16} />
            </Button>
            <Button onClick={() => setOpen(!open)}>
              <Image src="/plus.png" alt="add-button" width={16} height={16} />
            </Button>
            <Button onClick={() => setOpen(!open)}>
              <Image src="/plus.png" alt="add-button" width={16} height={16} />
            </Button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story here"
        />
      </div>
    </div>
  );
}

export default WritePage;
