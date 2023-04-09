import axios from "axios";
import { useState, useEffect } from "react";
import { CategoryMeal } from "../types/types";

export const useCategoryMeals = (categoryId: string) => {
  const [categoryMeals, setCategoryMeals] = useState<CategoryMeal[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategoryRecipes = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`
        );

        setCategoryMeals(res.data.meals);
        setLoading(false);
      } catch (err) {
        console.error(`Error while fetching recipes for category: ${err}`);
        setLoading(false);
      }
    };

    getCategoryRecipes();
  }, []);

  return { categoryMeals, loading };
};
