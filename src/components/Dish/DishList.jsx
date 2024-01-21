import { useContext } from "react";
import Dish from "./Dish";
import { DishesContext } from "../../context/DishesContext";
import "./DishList.css";

const DishList = () => {
  const { dishes } = useContext(DishesContext);

  return (
    <>
      <div className="row" id="menu">
        <div className="col-11">
          <div className="row p">
            {dishes
              .filter((dish) => dish.state === true)
              .map((dish) => (
                <Dish
                  key={dish.id}
                  name={dish.name}
                  price={dish.price}
                  img={dish.img}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DishList;
