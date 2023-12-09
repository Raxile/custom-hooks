import HomeWrapper from "@/components/HomeWrapper";
import { getArray } from "@/helper/utilityFunctions";

const Loading = () => {
  const getData = () => {
    return {
      products: getArray(20),
    };
  };
  return (
    <main className="container mx-auto ">
      <HomeWrapper isLoading data={getData()} />
    </main>
  );
};

export default Loading;
