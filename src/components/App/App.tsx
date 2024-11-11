import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { AboutMe } from "../../pages/AboutMe";
import { SharedLayout } from "../SharedLayout";

export function App() {
  return (
    <div>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
