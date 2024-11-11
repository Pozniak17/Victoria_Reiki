import { GrLanguage } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import css from "./DesktopMenu.module.css";

export function DesktopMenu() {
  return (
    <div className={css.wrapper}>
      <div>
        <NavLink className={css.logo} to="/">
          Viktoria Reiki
        </NavLink>
      </div>

      <nav className={css.nav_wrapper}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={css.link} to="/about-me">
              About me
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={css.link} to="/services">
              Reiki Services
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={css.link} to="/calendar">
              Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <GrLanguage size="24px" color="#D3CCE3" />
      </div>
    </div>
  );
}
