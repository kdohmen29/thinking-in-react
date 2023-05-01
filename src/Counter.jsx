
import {useMealsListContext} from "./MealProvider";




export default function Counter() {

    const {meals} = useMealsListContext();

    return (
        <h2>{meals.length} Meals Left</h2>
    )
}