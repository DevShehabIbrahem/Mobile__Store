import "./mobile.scss";

import words from "../../words";
import { Link } from "react-router-dom";
import { MdOutlineNavigateBefore } from "react-icons/md";

const NavLinks = () => {
  const { NavbarList } = words;
  return (
    <ul className="ul_mobile">
      {NavbarList.map((n) => (
        <li key={n}>
          <span to="/">
            <MdOutlineNavigateBefore />
            {n}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
