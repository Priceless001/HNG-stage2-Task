import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about/:id" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
