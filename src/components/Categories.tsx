import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentCategorie } from "../redux/slices/filterSlice";

const categoriesList: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const currentCategorie = useAppSelector(
    (state) => state.filter.currentCategorie
  );
  const onChangeCategory = useCallback(
    (index: number) => {
      dispatch(setCurrentCategorie(index));
    },
    [dispatch]
  );

  return (
    <>
      <div className="categories">
        <ul>
          {categoriesList.map((categorie, index) => (
            <li
              key={categorie}
              className={currentCategorie === index ? "active" : ""}
              onClick={() => onChangeCategory(index)}
            >
              {categorie}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export default Categories;
