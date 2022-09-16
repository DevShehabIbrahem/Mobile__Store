import "../../css/mobileMenu/mobile.css";

import words from "../../words";
import { MdNavigateNext } from "react-icons/md";

const NavLinks = () => {
  const { NavbarList } = words;
  return (
    <ul className="ul_mobile">
      {NavbarList.map((n) => (
        <li key={n}>
          <span to="/">
            {n}
            <MdNavigateNext />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
