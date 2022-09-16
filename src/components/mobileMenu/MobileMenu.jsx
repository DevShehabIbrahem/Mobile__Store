import NavLinks from "./NavLinks";
import { AiOutlineClose } from "react-icons/ai";
import "./mobile.scss";

const MobileMenu = ({ setMenu }) => {
  return (
    <div className="mobilemenu">
      <span className="mobilemenu__close">
        <AiOutlineClose onClick={() => setMenu(false)} />
      </span>
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
