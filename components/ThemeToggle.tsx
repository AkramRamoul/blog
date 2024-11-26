"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme(); // Access theme and theme setter
  const [mounted, setMounted] = useState(false); // Prevent hydration issues

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering on server-side

  return (
    <div
      className={clsx(
        "w-[40px] h-[20px] cursor-pointer rounded-[50px] flex items-center justify-between relative px-1 transition-colors duration-300",
        {
          "bg-white": theme === "dark",
          "bg-[hsl(224,71.4%,4.1%)]": theme !== "dark",
        }
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Moon Icon */}
      <Image
        src="/moon.png"
        alt="dark mode"
        width={14}
        height={14}
        style={{
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Toggle Circle */}
      <div
        className={clsx(
          "w-4 h-4 rounded-[50%] absolute transition-all duration-300",
          {
            "left-[1px] bg-background": theme === "dark",
            "right-[1px] bg-white": theme !== "dark",
          }
        )}
      ></div>

      {/* Sun Icon */}
      <Image
        src="/sun.png"
        alt="light mode"
        width={14}
        height={14}
        className="transition-opacity duration-300"
      />
    </div>
  );
};

export default ThemeToggle;
