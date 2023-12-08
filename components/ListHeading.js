import useQueryParam from "@/hooks/useQueryParam";

const ListHeading = ({ limit, page, totalProduct = 0 }) => {
  const router = useQueryParam();

  return (
    <section className="container mx-auto   my-4">
      <div className="flex justify-between items-center">
        <div>
          <input
            type="text"
            className="px-2 h-6 rounded-full text-sm outline-none border border-red-200 hover:border-red-300 focus:border-red-300"
            placeholder="search"
            onChange={(e) => {
              router.push(
                {
                  pathName: "/",
                  query: {
                    page: 1,
                    search: e.target.value,
                  },
                },
                { isReplace: false }
              );
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-1 text-sm font-serif text-red-500 font-medium opacity-90">
          <span>
            Viewing: {page}-{Math.ceil(totalProduct / limit)}
          </span>
          <span>| Total: {totalProduct}</span>

          <select
            name=""
            id=""
            className="h-5 px-2 cursor-pointer rounded-full outline-none border bg-white border-red-200 hover:border-red-300 focus:border-red-300"
            value={limit}
            onChange={(e) => {
              router.push({
                pathName: "/",
                query: { limit: e.target.value, page: 1 },
              });
            }}
          >
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
          </select>
        </div>
      </div>
      <div className="w-full h-[1px] mt-2 bg-orange-500 opacity-40" />
    </section>
  );
};

export default ListHeading;
