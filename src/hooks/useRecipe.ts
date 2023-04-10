import axios from "axios";
import { useState, useEffect } from "react";
import { MealRecipe } from "../types/types";

export const useRecipe = (mealId: string) => {
  const [recipe, setRecipe] = useState<MealRecipe | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const recipe: MealRecipe = res.data.meals[0];

        const ingredients = Object.entries(recipe).reduce(
          (acc: string[], [key, value]) => {
            if (key.includes("strIngredient") && value?.trim()) {
              acc.push(value);
            }

            return acc;
          },
          []
        );
        const measures = Object.entries(recipe).reduce(
          (acc: string[], [key, value]) => {
            if (key.includes("strMeasure") && value?.trim()) {
              acc.push(value);
            }

            return acc;
          },
          []
        );

        setRecipe({ ...recipe, ingredients, measures });
        setLoading(false);
      } catch (err) {
        console.error(`Error while fetching the recipe: ${err}`);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, []);

  return { recipe, loading };
};
