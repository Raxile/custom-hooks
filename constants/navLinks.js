import { PAGES_ROUTE } from './constant.helper';
import Locale from './constant.locale';

const navLinks = [
  {
    label: Locale.NAV_LINKS.HOME,
    route: '/',
  },
  {
    label: Locale.NAV_LINKS.ABOUT_US,
    route: `/${PAGES_ROUTE.ABOUT_US}`,
  },
];
export default navLinks;
