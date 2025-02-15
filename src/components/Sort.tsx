import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentSort } from "../redux/slices/filterSlice";
import Order from "./Order";

const sortList: { sortBy: string }[] = [
  { sortBy: "rating" },
  { sortBy: "price" },
  { sortBy: "title" },
];

const Sort: React.FC = React.memo(() => {
  const currentSort = useAppSelector((state) => state.filter.currentSort);
  const [popupVisible, setPopupVisible] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const handleChangeSortType = useCallback(
    (sort: string) => {
      dispatch(setCurrentSort(sort));
      setPopupVisible(!popupVisible);
    },
    [dispatch, popupVisible]
  );

  const russifySort = (sortName: string) => {
    if (sortName === "rating") return "популярности";
    if (sortName === "title") return "алфавиту";
    if (sortName === "price") return "цене";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setPopupVisible(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sort" onClick={() => setPopupVisible(!popupVisible)}>
        <div className="sort__label">
          <div ref={sortRef} className="sort__label-sort">
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
            <b>Сортировка по:</b>
            <span>{russifySort(currentSort)}</span>
          </div>

          <Order />
        </div>
        <div className={popupVisible ? "sort__popup" : "sort__popup hidden"}>
          <ul>
            {sortList.map((sort, index) => (
              <li
                key={index}
                className={`${sort.sortBy === currentSort ? "active" : ""} `}
                onClick={() => handleChangeSortType(sort.sortBy)}
              >
                {russifySort(sort.sortBy)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
});

export default Sort;
