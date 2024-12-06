"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

const Pagination = ({
  page,
  hasPreviousPage,
  hasNextPage,
}: PaginationProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="font-bold text-lg w-[100px] border-none p-4 bg-red-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${Number(page) - 1}`)}
        disabled={!hasPreviousPage}
      >
        Previous
      </button>
      <button
        className="font-bold text-lg w-[100px] border-none p-4 bg-red-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${Number(page) + 1}`)}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
