import Image from 'next/image';
import HiddenOnLoadingWrapper from './HiddenOnLoadingWrapper';

const Card = ({
  title = '',
  category = '',
  price = 0,
  rating = 0,
  stock = 0,
  thumbnail = '',
  isLoading,
}) => {
  return (
    <>
      <div>
        <div className="h-[21rem] w-auto p-2 border border-red-200 bg-white hover:border-red-300">
          <div className={` w-full h-44 ${isLoading ? ' skeleton' : ''}`}>
            <HiddenOnLoadingWrapper isLoading={isLoading}>
              <Image
                src={thumbnail}
                alt={title}
                width={600}
                height={600}
                className={'w-full h-full object-contain '}
              />
            </HiddenOnLoadingWrapper>
          </div>
          <div className="name my-4 font-serif">
            <h3
              className={`text-lg w-full h-7 mb-1 font-bold text-slate-700 line-clamp-1 ${
                isLoading ? ' skeleton ' : ''
              }`}
            >
              <HiddenOnLoadingWrapper isLoading={isLoading}>
                {title}
              </HiddenOnLoadingWrapper>
            </h3>
            <p
              className={`text-sm text-slate-500 w-full h-5 ${
                isLoading ? ' skeleton' : ''
              }`}
            >
              <HiddenOnLoadingWrapper isLoading={isLoading}>
                {category}
              </HiddenOnLoadingWrapper>
            </p>
          </div>
          <div className="flex justify-between h-4 text-slate-500 text-xs">
            <div className={isLoading ? ' skeleton w-7' : ''}>
              <HiddenOnLoadingWrapper isLoading={isLoading}>
                {rating}
              </HiddenOnLoadingWrapper>
            </div>
            <div className={isLoading ? ' skeleton w-20' : ''}>
              <HiddenOnLoadingWrapper isLoading={isLoading}>
                {stock} Items Left
              </HiddenOnLoadingWrapper>
            </div>
            <div className={isLoading ? ' skeleton w-7' : ''}>
              <HiddenOnLoadingWrapper isLoading={isLoading}>
                &#x20b9;{price}
              </HiddenOnLoadingWrapper>
            </div>
          </div>
          <div className="show my-3">
            <hr className="border-slate-300 " />
            <div
              className={`text-xs text-blue-500 font-extrabold justify-center w-full h-4  mt-2 flex hover:text-slate-500 ${
                isLoading ? ' skeleton' : ''
              }`}
            >
              <HiddenOnLoadingWrapper isLoading={isLoading}>
                QUICK VIEW
              </HiddenOnLoadingWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
