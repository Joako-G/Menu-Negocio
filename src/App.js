import { useContext, useEffect } from 'react';
import './App.css';
import DishList from './components/Dish/DishList';
import { DishesContext } from './context/DishesContext';
import { getDishes } from './service/service'
//import { dishes } from './service/serviceLocal'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const { setDishes } = useContext(DishesContext);

  useEffect( () => {
    //setDishes(dishes);
    //CAMBIOS
    console.log("Llamada a la API");
    const fetchDishes = async () =>{
      try{
        const data = await getDishes();
        setDishes(data);
      } catch (error){
        console.log("Error al conectar con la API");
      }
    }
    
    fetchDishes();

    const intervalID = setInterval(() => {
      fetchDishes();
    }, 5000);

    return () => clearInterval(intervalID);
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
