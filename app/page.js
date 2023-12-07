import HomeWrapper from "@/components/HomeWrapper";
import { get } from "@/helper/axiosInstance";

async function getData(limit = 20, page = 1, search) {
  if (search) {
    if (limit && page) {
      const data = await get(
        `/products/search?q=${search}&limit=${limit}&skip=${(page - 1) * limit}`
      );
      return data;
    }
    const data = await get(`/products/search?q=${search}`);
    return data;
  } else {
    if (limit && page) {
      const data = await get(
        `/products?limit=${limit}&skip=${(page - 1) * limit}`
      );
      return data;
    }
    const data = await get(`/products`);
    return data;
  }
}

export default async function Home(props) {
  const { limit, page, search } = props.searchParams;
  const data = await getData(limit, page, search);

  return (
    <main className="container mx-auto ">
      <HomeWrapper data={data} limit={limit} page={page} />
    </main>
  );
}
