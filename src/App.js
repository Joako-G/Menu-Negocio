import { useContext, useEffect } from 'react';
import './App.css';
import DishList from './components/Dish/DishList';
import { DishesContext } from './context/DishesContext';
//import { getDishes } from './service/service'
import { dishes } from './service/serviceLocal'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const { setDishes } = useContext(DishesContext);

  useEffect( () => {
    setDishes(dishes);
    /*getDishes()
    .then((data)=> {
      setDishes(data);
    })
    .catch((error) => console.error(error));*/
  }, [setDishes])

  return (
    <div className="App">
      <Header/>
      <DishList/>
      <Footer/>
    </div>
  );
}

export default App;
