import Image from "next/image";
import React from "react";
import Arrow from "@/assets/images/arrow.svg";
import useQueryParam from "@/hooks/useQueryParam";

const Pagination = ({ limit, page, totalProduct = 0 }) => {
  const router = useQueryParam();
  const totalPages = Math.ceil(totalProduct / limit);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return pages.length > 1 ? (
    <section className="mx-auto container">
      <div className="flex justify-center items-center my-6">
        <button
          className="roundBtn"
          disabled={page === 1}
          onClick={() =>
            router.push({
              pathName: "/",
              query: { limit, page: page - 1 },
            })
          }
        >
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={Arrow}
              alt="arrow"
              className=" invert -rotate-90 w-3 h-3"
            />
          </div>
        </button>
        {pages.map((pageValue) => (
          <button
            key={pageValue}
            className="roundBtn text-xs font-bold text-white"
            disabled={page === pageValue}
            onClick={() => {
              router.push({
                pathName: "/",
                query: { limit, page: pageValue },
              });
            }}
          >
            {pageValue}
          </button>
        ))}

        <button
          className=" roundBtn text-xs font-bold text-white"
          disabled={page === totalPages}
          onClick={() =>
            router.push({
              pathName: "/",
              query: { limit, page: Number(page) + 1 },
            })
          }
        >
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={Arrow}
              alt="arrow"
              className=" invert rotate-90 w-3 h-3"
            />
          </div>
        </button>
      </div>
    </section>
  ) : null;
};

export default Pagination;
