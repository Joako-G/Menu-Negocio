import { createContext, useState } from "react";

export const DishesContext = createContext({
  dishes: [],
  setDishes: () => {}
})

export const DishesProvider = ({ children }) =>{
  const [ dishes, setDishes] = useState([]);
  const value = { dishes, setDishes };

  return <DishesContext.Provider value={value}> {children }</DishesContext.Provider>
}