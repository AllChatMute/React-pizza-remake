import * as React from "react";
import Logo from "../assets/img/pizza-logo.svg";
import Search from "./Search/Search";
import { Link } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { selectCartItems } from "../redux/slices/cartSlice";
import { calculateTotal } from "../utils/calculateTotal";
import HeaderCartBadge from "./HeaderCartBadge";

const Header: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const { totalCount, totalPrice } = calculateTotal(cartItems);

  return (
    <>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={Logo} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Search />
          <HeaderCartBadge totalCount={totalCount} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
};

export default Header;
