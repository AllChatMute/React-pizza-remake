import cartPizzaType from "../types/cartPizzaInterface";

type calculateTotalType = (itemsArray: cartPizzaType[]) => {
  totalCount: number;
  totalPrice: number;
};

export const calculateTotal: calculateTotalType = (itemsArray) => {
  const totalCount = itemsArray.reduce(
    (total: number, item: cartPizzaType) => total + item.count,
    0
  );
  const totalPrice = itemsArray.reduce(
    (total: number, item: cartPizzaType) => total + item.price * item.count,
    0
  );

  return { totalCount, totalPrice };
};
