import { IoIosMenu } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css";

export function MobileMenu() {
  return (
    <nav className={css.wrapper}>
      <div>
        <IoIosMenu size="40px" color="#414343" />
      </div>
      <NavLink className={css.logo} to="/">
        Viktoria Reiki
      </NavLink>
      <div>
        <GrLanguage size="24px" color="#D3CCE3" />
      </div>
    </nav>
  );
}
