import Home from "./pages/Home";
import "./scss/app.scss";
import Header from "./components/Header";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Home />
      </div>
    </>
  );
};

export default App;
