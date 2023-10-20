import './Dish.css'

const Dish = ( {name, price} ) => {
  return <div className="dish-square">
    
    <h2> {name} </h2>
    <h3> Precio </h3>
    <p> {price} </p>
  </div>;
};

export default Dish;
