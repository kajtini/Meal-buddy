export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface CategoryMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealRecipe extends CategoryMeal {
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strSource: string;
  strYoutube: string;
  ingredients: string[];
  measures: string[];
}
