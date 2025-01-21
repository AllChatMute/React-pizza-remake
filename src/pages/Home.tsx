import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";

import PizzaBlockType from "../types/PizzaBlockInterface";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Paginate from "../components/Paginate/Paginate";
import { setItems, fetchPizza } from "../redux/slices/pizzaSlice";

const Home: React.FC = () => {
  const { currentCategorie, currentSort, currentOrder } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.value);
  const currentPage = useAppSelector((state) => state.paginate.currentPage);
  const { items, status } = useAppSelector((state) => state.pizza);

  const fetchPizzas = async () => {
    try {
      const data = await dispatch(
        fetchPizza({
          currentCategorie,
          currentSort,
          currentOrder,
          searchValue,
          currentPage,
        })
      );
      dispatch(setItems(data.payload));

      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  };
  useEffect(() => {
    fetchPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategorie, currentSort, currentOrder, searchValue, currentPage]);

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
          <div className="content__items">
            {status === "pending" ? skeletons : pizzas}
          </div>
          <div className="content__paginate">
            <Paginate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
