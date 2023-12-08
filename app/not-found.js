"use client";
import useQueryParam from "@/hooks/useQueryParam";

export default function NotFound() {
  const router = useQueryParam();
  return (
    <div className="flex flex-col h-[85vh]  justify-center items-center">
      <h2 className="font-serif text-4xl">404 | Not Found</h2>
      <button
        onClick={() => router.push({ pathName: "/" })}
        className="bg-red-300 mt-3 p-2 rounded-full border border-red-700 text-sm capitalize hover:bg-red-700 hover:text-white"
      >
        Home
      </button>
    </div>
  );
}
