import logo from "../../assests/Logo/Group 2925.svg";
import { AiOutlineMenu } from "react-icons/ai";
import words from "../../words";

import "./Navbar.scss";

const Navbar = () => {
  const { NavbarList, icons } = words;

  return (
    <nav>
      <div className="nav__content">
        <div className="nav__logo">
          <img src={logo} alt="apple-logo" />
        </div>

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
        <AiOutlineMenu className="nav__menu" />
      </div>
    </nav>
  );
};

export default Navbar;
