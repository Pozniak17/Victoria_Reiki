import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
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

export default App;
