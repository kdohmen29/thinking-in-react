import {createContext, useContext, useState} from "react";

const MealsContext = createContext();

const todaysMeals = [
    {   name: "Baked Beans",
        calories: 200,
        id: 12345   },
    {   name: "Grilled Veggies",
        calories: 80,
        id: 87564   },
    {   name: "Soup",
        calories: 100,
        id: 34567   }
]


const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todaysMeals)


    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => useContext(MealsContext);
export default MealsProvider