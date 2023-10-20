import { useContext, useEffect } from 'react';
import './App.css';
import DishList from './components/DishList';
import { DishesContext } from './context/DishesContext';
import { getDishes } from './service/service'

function App() {
  const { setDishes } = useContext(DishesContext);

  useEffect( () => {
    getDishes()
    .then((data)=> {
      setDishes(data);
    })
    .catch((error) => console.error(error));
  })

  return (
    <div className="App">
      <DishList/>
    </div>
  );
}

export default App;
