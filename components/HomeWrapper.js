"use client";

import Card from "./Card";
import ListHeading from "./ListHeading";
import Pagination from "./Pagination";

const HomeWrapper = ({ data, limit = 20, page = 1 }) => {
  return (
    <div>
      <ListHeading limit={limit} page={page} totalProduct={data.total} />
      <div className="restaurant grid grid-cols-4 gap-6 my-6  ">
        {data?.products.map((product) => (
          <Card
            title={product.title}
            key={product.id}
            category={product.category}
            thumbnail={product.thumbnail}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
          />
        ))}
      </div>
      <Pagination limit={limit} page={Number(page)} totalProduct={data.total} />
    </div>
  );
};

export default HomeWrapper;
