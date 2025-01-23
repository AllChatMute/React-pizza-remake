import React, { useState } from "react";
import PizzaBlockType from "../types/PizzaBlockInterface";
import Rating from "./Rating";
import { handleAddCartItem, selectCartItems } from "../redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import cartPizzaType from "../types/cartPizzaInterface";
import { useNavigate } from "react-router";

const typeList: { id: number; name: string }[] = [
  { id: 0, name: "тонкое" },
  { id: 1, name: "традиционное" },
];

const PizzaBlock: React.FC<PizzaBlockType> = ({
  title,
  imageUrl,
  price,
  types,
  sizes,
  rating,
  id,
}) => {
  const [pizzaType, setPizzaType] = useState<number>(0);
  const [pizzaSize, setPizzaSize] = useState<number>(sizes[0]);
  const count = useAppSelector(selectCartItems).find(
    (item) => item.id === id
  )?.count;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const pizzaToCart: cartPizzaType = {
    id,
    title,
    price,
    count: 1,
    imageUrl,
    type: pizzaType,
    size: pizzaSize,
  };

  const handleOpenFullPizza = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <>
      <div className="pizza-block__wrapper">
        <div className="pizza-block">
          <div className="pizza-block__nav-link" onClick={handleOpenFullPizza}>
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{title}</h4>
          </div>

          <div className="pizza-block__selector">
            <ul>
              {types.map((type) => (
                <li
                  key={type}
                  className={pizzaType === type ? "active" : ""}
                  onClick={() => setPizzaType(type)}
                >
                  {typeList[type].name}
                </li>
              ))}
            </ul>
            <ul>
              {sizes.map((size) => (
                <li
                  key={size}
                  className={pizzaSize === size ? "active" : ""}
                  onClick={() => setPizzaSize(size)}
                >
                  {size} см
                </li>
              ))}
            </ul>
          </div>
          <Rating rating={rating} />
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">{price} ₽</div>
            <div
              className="button button--outline button--add"
              onClick={() => dispatch(handleAddCartItem(pizzaToCart))}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>{count ? count : "0"}</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaBlock;
