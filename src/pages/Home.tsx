import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";

import axios from "axios";
import PizzaBlockType from "../types/PizzaBlockInterface";
import { useAppSelector } from "../redux/hooks";

const Home: React.FC = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentCategorie, currentSort } = useAppSelector(
    (state) => state.filter
  );

  const fetchPizzas = async () => {
    try {
      const category =
        currentCategorie > 0 ? `category=${currentCategorie}&` : "";

      const response = await axios.get(
        `https://66cf3d37901aab24842179de.mockapi.io/Items?${category}sortBy=${currentSort}`
      );
      if (response.status !== 200) throw new Error();

      setItems(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategorie, currentSort]);

  const pizzas = items.map((item: PizzaBlockType) => (
    <PizzaBlock key={item.id} {...item} />
  ));
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Skeleton key={item} />
  ));
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
