import Locale from '@/constants/constant.locale';
import { getCurrentYear } from '@/helper/utilityFunctions';

const Footer = () => {
  const year = getCurrentYear();
  return (
    <footer className=" bg-red-600 w-full h-8">
      <div className="container mx-auto flex h-full justify-center items-center text-sm text-white font-serif font-medium">
        © Copyright {year} {Locale.PROJECT_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
