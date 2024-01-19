import "./Dish.css";

const Dish = ({ name, price, img }) => {
  return (
    <div className="col-xl-3 col-md-4 col-6 offset-xl-1 offset-md-2 offset-3 gy-md-4 gy-4 tarjeta">
      <div className="card" id="dish">
        <img src={img} alt="No hay" />
        <h1 className="title"> {name} </h1>
        <h3> Precio </h3>
        <p className="price"> {price} </p>
      </div>
    </div>
  );
};

export default Dish;
