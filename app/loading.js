import HomeWrapper from '@/components/HomeWrapper';
import { getLoadingData } from '@/helper/utilityFunctions';

const Loading = () => {
  return (
    <main className="container mx-auto ">
      <HomeWrapper isLoading data={getLoadingData()} />
    </main>
  );
};

export default Loading;
