import Locale from '@/constants/constant.locale';
import navLinks from '@/constants/navLinks';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-red-600 text-white h-12 w-full flex items-center justify-center">
      <div className="container mx-auto  flex  justify-between">
        <div className="logo text-2xl font-serif font-bold italic cursor-pointer">
          <Link href="/">{Locale.PROJECT_NAME}</Link>
        </div>
        <ul className="flex gap-4 font-semibold items-center text-sm font-serif ">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link href={navLink.route}>{navLink.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
