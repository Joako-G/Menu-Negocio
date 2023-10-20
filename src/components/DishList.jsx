import { useContext } from "react";
import Dish from "./Dish";
import { DishesContext } from "../context/DishesContext";

const DishList = () => {
  const { dishes } = useContext(DishesContext)
  const imageURL = "https://photos.app.goo.gl/https://photos.app.goo.gl/UX4zorjt8jKFM1467";

  return dishes.filter( dish => dish.state === true).map((dish) => (
    <>
      <img src={imageURL} alt="" />
      <Dish name={dish.name} price={dish.price} />
    </>
  ));
};

export default DishList;
