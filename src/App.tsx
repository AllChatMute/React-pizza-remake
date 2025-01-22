import Home from "./pages/Home";
import "./scss/app.scss";
import React from "react";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="pizza/:id" element={<FullPizza />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
