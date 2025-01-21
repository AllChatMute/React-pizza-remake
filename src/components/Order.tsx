import React, { useEffect, useRef, useState } from "react";
import { setCurrentOrder } from "../redux/slices/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const orderTypes: { name: string; type: string }[] = [
  { name: "возрастание ↑", type: "asc" },
  { name: "убывание ↓", type: "desc" },
];

const Order: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const orderRef = useRef<HTMLDivElement | null>(null);
  const currentOrder = useAppSelector((state) => state.filter.currentOrder);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event.composedPath());
      if (
        orderRef.current &&
        !event.composedPath().includes(orderRef.current)
      ) {
        setPopupVisible(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChangeOrder = (type: string) => {
    dispatch(setCurrentOrder(type));
    setPopupVisible(false);
  };

  const displayOrder = orderTypes.find(
    (item) => item.type === currentOrder
  )?.name;

  return (
    <>
      <div
        className="sort__label-order"
        onClick={() => setPopupVisible(!popupVisible)}
        ref={orderRef}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Упорядочивание:</b>
        <span>{displayOrder}</span>
      </div>
      <div
        className={
          popupVisible
            ? "sort__popup sort__popup-order"
            : "sort__popup sort__popup-order hidden"
        }
      >
        <ul>
          {orderTypes.map((obj) => (
            <li
              key={obj.name}
              className={obj.type === currentOrder ? "active" : ""}
              onClick={() => handleChangeOrder(obj.type)}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Order;
