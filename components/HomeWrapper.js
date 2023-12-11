'use client';

import { metaDataBase } from '@/constants/defaultValues';
import Card from './Card';
import ListHeading from './ListHeading';
import Pagination from './Pagination';

const HomeWrapper = ({
  data,
  limit = metaDataBase.limit,
  page = metaDataBase.page,
  isLoading = false,
}) => {
  return (
    <div>
      <ListHeading limit={limit} page={page} totalProduct={data?.total} />
      <div className="restaurant grid grid-cols-4 gap-6 my-6  ">
        {data?.products.map((product) => (
          <Card
            title={product?.title}
            key={product?.id}
            category={product?.category}
            thumbnail={product?.thumbnail}
            price={product?.price}
            rating={product?.rating}
            stock={product?.stock}
            isLoading={isLoading}
          />
        ))}
      </div>
      {!isLoading ? (
        <Pagination
          limit={limit}
          page={Number(page)}
          totalProduct={data?.total}
        />
      ) : null}
    </div>
  );
};

export default HomeWrapper;
