import Link from "next/link";
import Image from "next/image";
function MenuPosts({ withImage }: { withImage: boolean }) {
  return (
    <div className="flex flex-col gap-8 mt-8 mb-14">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              fill
              alt=""
              className="rounded-full border-[3px] border-gray-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="py-[3px] px-[8px] rounded-[10px] text-xs text-white w-fit bg-[#ff7857]">
            Travel
          </span>
          <h3 className="text-lg font-semibold text-[#a6a6a6]">
            Lorem ipsum, dolor sit.
          </h3>
          <div className="text-xs text-muted-foreground">
            <span>John Doe </span>
            <span className="text-gray-100">- 29.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              fill
              alt=""
              className="rounded-full border-[3px] border-gray-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="py-[3px] px-[8px] rounded-[10px] text-xs text-white w-fit bg-[#ff7857]">
            Culture
          </span>
          <h3 className="text-lg font-semibold text-[#a6a6a6]">
            Lorem ipsum, dolor sit.
          </h3>
          <div className="text-xs text-muted-foreground">
            <span>John Doe </span>
            <span className="text-gray-100">- 29.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              fill
              alt=""
              className="rounded-full border-[3px] border-gray-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="py-[3px] px-[8px] rounded-[10px] text-xs text-white w-fit bg-[#ff7857]">
            Food
          </span>
          <h3 className="text-lg font-semibold text-[#a6a6a6]">
            Lorem ipsum, dolor sit.
          </h3>
          <div className="text-xs text-muted-foreground">
            <span>John Doe </span>
            <span className="text-gray-100">- 29.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              fill
              alt=""
              className="rounded-full border-[3px] border-gray-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="py-[3px] px-[8px] rounded-[10px] text-xs text-white w-fit bg-[#ff7857]">
            Fashion
          </span>
          <h3 className="text-lg font-semibold text-[#a6a6a6]">
            Lorem ipsum, dolor sit.
          </h3>
          <div className="text-xs text-muted-foreground">
            <span>John Doe </span>
            <span className="text-gray-100">- 29.11.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts;
