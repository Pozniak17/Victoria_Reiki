import { useState, useEffect } from "react";
import css from "./SharedLayout.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

export default function SharedLayout() {
  // Стан для зберігання інформації про ширину вікна
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };

    // Додаємо обробник подій для зміни розміру вікна
    window.addEventListener("resize", handleResize);

    // Очистка при розмонтувані
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={css.header}>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
}
