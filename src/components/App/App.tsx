import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { AboutMe } from "../../pages/AboutMe";
import { SharedLayout } from "../SharedLayout";
import css from "./App.module.css";

export function App() {
  return (
    <div className={css.container}>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
