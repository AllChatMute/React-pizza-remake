import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import axios from "axios";
import PizzaBlockType from "../types/PizzaBlockInterface";

const Home: React.FC = () => {
  const [items, setItems] = useState([]);
  const fetchPizzas = async () => {
    try {
      const response = await axios.get(
        `https://66cf3d37901aab24842179de.mockapi.io/Items`
      );
      if (response.status !== 200) throw new Error();

      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item: PizzaBlockType) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
