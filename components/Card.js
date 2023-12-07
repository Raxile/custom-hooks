import React from "react";

const Card = ({
  title = "KFC",
  description = "very very Tasty",
  category = "Mobile",
  discount = 0,
  price = 5,
  rating = "",
  stock = 0,
  thumbnail = "https://jscurious.com/wp-content/uploads/2021/01/javascript_fetch_api.jpg",
}) => {
  return (
    <>
      <div>
        <div className="h-[21rem] w-auto p-2 border border-red-200 bg-white hover:border-red-300">
          <div className="image w-full h-44">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="name my-4 font-serif">
            <h3 className="text-lg font-bold text-slate-700 line-clamp-1">
              {title}
            </h3>
            <p className="text-sm text-slate-500">{category}</p>
          </div>
          <div className="flex justify-between text-slate-500 text-xs">
            <div className="rating">{rating}</div>
            <div className="time">{stock} Items Left</div>
            <div className="price">&#x20b9;{price}</div>
          </div>
          <div className="show my-3 ">
            <hr className="border-slate-300 " />
            <span className="text-xs text-blue-500 font-extrabold justify-center  mt-2 flex hover:text-slate-500">
              QUICK VIEW
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
