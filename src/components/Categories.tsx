import React from "react";
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

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentCategorie = useAppSelector(
    (state) => state.filter.currentCategorie
  );

  return (
    <>
      <div className="categories">
        <ul>
          {categoriesList.map((categorie, index) => (
            <li
              key={categorie}
              className={currentCategorie === index ? "active" : ""}
              onClick={() => dispatch(setCurrentCategorie(index))}
            >
              {categorie}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
