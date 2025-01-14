import React, { useState } from "react";

const categoriesList: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const [currentCategorie, setCurrentCategorie] = useState<number>(0);

  return (
    <>
      <div className="categories">
        <ul>
          {categoriesList.map((categorie, index) => (
            <li
              key={categorie}
              className={currentCategorie === index ? "active" : ""}
              onClick={() => setCurrentCategorie(index)}
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
