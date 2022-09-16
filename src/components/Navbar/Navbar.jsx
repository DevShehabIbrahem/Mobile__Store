import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import words from "../../words";
import logo from "../../assests/Logo/Group 2925.svg";
import "../../css/Navbar/Navbar.css";
import MobileMenu from "../mobileMenu/MobileMenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { NavbarList, icons } = words;

  return (
    <nav>
      <div className="nav__content">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="apple-logo" />
        </Link>

        <div className="nav__list">
          <ul>
            {NavbarList.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>

        <div className="nav__icons">
          {/* largeScreen-List */}
          {icons.map((icon, i) => (
            <a href="##" key={i}>
              {icon}
            </a>
          ))}
        </div>

        {/* MobileScreen-List */}
        <AiOutlineMenu className="nav__menu" onClick={() => setMenu(true)} />
        {menu && <MobileMenu setMenu={setMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
