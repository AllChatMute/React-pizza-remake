import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
