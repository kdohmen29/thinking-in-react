import {useMealsListContext} from "./MealProvider";


export default function MealsList() {

    const {meals} = useMealsListContext();


    return (
        <div>
            <h1>Meals list using context API</h1>
            {meals.map((meal) => (
                <div key={meal.id}>
                    <h2>{meal.name}</h2>
                    <h3>Calories: {meal.calories}</h3>
                    <hr/>
                </div>

            ))}
        </div>

    )
}