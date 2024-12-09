"use client";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
import { CldUploadWidget } from "next-cloudinary";
function WritePage() {
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  /* eslint-disable  @typescript-eslint/no-explicit-any */

  const handleUploadSuccess = (result: any) => {
    setFile(result.info.secure_url); // Save the uploaded file URL
  };

  const toSlug = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove non-alphanumeric characters
      .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with dashes
      .replace(/^-+|-+$/g, ""); // Remove leading or trailing dashes
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc: value,
          img: file,
          slug: toSlug(title),
          catSlug,
        }),
      });
      if (response.ok) {
        alert("Post published successfully!");
      } else {
        alert("Failed to publish the post. Please try again.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="p-12 text-6xl border-none outline-none bg-transparent"
      />
      <select
        className="mb-[50px] py-[10px] px-[20px] ml-[50px] w-max border-none outline-none  bg-background"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-[20px] h-[700px] relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-transparent border-2 border-black flex items-center justify-center dark:border-[#ddd] aspect-square cursor-pointer"
        >
          <Image src="/plus.png" alt="add-button" width={16} height={16} />
        </button>

        {open && (
          <div className="flex gap-5 bg-background absolute z-[999] w-full left-12">
            <CldUploadWidget
              uploadPreset="d5empqg9"
              onSuccess={handleUploadSuccess}
              options={{ maxFiles: 1 }}
            >
              {({ open }) => (
                <button
                  className="w-9 h-9 rounded-full bg-transparent border-2 flex border-green-700 items-center justify-center aspect-square cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    open();
                  }}
                >
                  <Image
                    src="/image.png"
                    alt="add-button"
                    width={16}
                    height={16}
                  />
                </button>
              )}
            </CldUploadWidget>

            <button className="w-9 h-9 rounded-full bg-transparent flex border-2 items-center justify-center aspect-square cursor-pointer border-green-700">
              <Image
                src="/external.png"
                alt="add-button"
                width={16}
                height={16}
              />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border-2 flex items-center justify-center aspect-square cursor-pointer border-green-700">
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
        className="absolute top-24 font-semibold right-8 py-[10px] px-[20px] bg-green-600 rounded-md border-none text-white cursor-pointer"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
}

export default WritePage;
