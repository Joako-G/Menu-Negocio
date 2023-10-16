import { useContext } from "react";
import Dish from "./Dish";
import { DishesContext } from "../context/DishesContext";

const DishList = () => {
  const { dishes } = useContext(DishesContext)

  return dishes.filter( dish => dish.state === true).map((dish) => (
    <Dish key={dish.id} name={dish.name} price={dish.price} />
  ));
};

export default DishList;
