import Home from "./pages/Home";
import "./scss/app.scss";
import Header from "./components/Header";
import React from "react";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router";

const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
