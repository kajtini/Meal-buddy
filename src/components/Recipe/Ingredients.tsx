import { MealRecipe } from "../../types/types";
import IngredientExcerpt from "./IngredientExcerpt";
import RecipeHeading from "./RecipeHeading";

interface IngredientsProps {
  recipe: MealRecipe;
}

const Ingredients = ({ recipe }: IngredientsProps) => {
  return (
    <div>
      <RecipeHeading title="Ingredients" />
      <ul className="flex flex-col gap-5">
        {recipe?.ingredients?.map((ingredient, i) => (
          <IngredientExcerpt
            key={ingredient}
            ingredient={ingredient}
            measure={recipe.measures[i]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
