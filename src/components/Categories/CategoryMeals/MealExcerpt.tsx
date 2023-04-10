import React from "react";
import { CategoryMeal } from "../../../types/types";
import { Link } from "react-router-dom";

interface MealExcerptProps {
  meal: CategoryMeal;
}

const MealExcerpt = ({ meal }: MealExcerptProps) => {
  return (
    <li className="bg-secondary rounded-3xl overflow-hidden flex flex-col">
      <img
        className="h-32 w-full object-cover"
        src={meal.strMealThumb}
        alt="roasted chicken"
      />
      <div className="p-5 flex flex-col flex-grow gap-5">
        <h2 className="text-center text-3xl">{meal.strMeal}</h2>

        <Link
          to={`/recipes/${meal.idMeal}`}
          className="bg-gradient-to-b from-accent to-accent-dark w-full py-3 rounded-3xl mt-auto hover:scale-105 transition-all duration-500 text-center"
        >
          See recipe!
        </Link>
      </div>
    </li>
  );
};

export default MealExcerpt;
