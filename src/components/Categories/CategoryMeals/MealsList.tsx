import { CategoryMeal } from "../../../types/types";
import MealExcerpt from "./MealExcerpt";

interface MealsListProps {
  categoryMeals: CategoryMeal[];
}

const MealsList = ({ categoryMeals }: MealsListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {categoryMeals?.map((meal) => (
        <MealExcerpt key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};

export default MealsList;
