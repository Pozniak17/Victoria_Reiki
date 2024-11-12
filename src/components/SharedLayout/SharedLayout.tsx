import { useState, useEffect } from "react";
import css from "./SharedLayout.module.css";
import { MobileMenu } from "../MobileMenu";
import { DesktopMenu } from "../DesktopMenu";

export function SharedLayout() {
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
    <header className={`${css.header} ${css.container}`}>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
}
