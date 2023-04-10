import { Link, useParams } from "react-router-dom";
import { useRecipe } from "../../hooks/useRecipe";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { PuffLoader } from "react-spinners";

const Recipe = () => {
  const { id: mealId } = useParams();

  if (!mealId) return <div>No meal id provided</div>;

  const { recipe, loading } = useRecipe(mealId);

  return (
    <div className="flex-grow max-w-[1200px] p-5 flex flex-col gap-5">
      {loading && (
        <div className="flex flex-grow justify-center items-center">
          <PuffLoader
            className="mx-auto"
            color="#F54749"
            loading={loading}
            size={200}
            aria-label="Loading spinner"
          />
        </div>
      )}

      {recipe && (
        <>
          <Link
            to={`/categories/${recipe.strCategory}`}
            className="bg-gradient-to-b from-accent to-accent-dark py-3 px-5  text-center rounded-3xl flex items-center gap-5 justify-center  max-w-[256px]"
          >
            <HiOutlineArrowNarrowLeft size={20} />
            Back to {recipe.strCategory}
          </Link>

          <h2 className="text-5xl text-start">{recipe.strMeal}</h2>

          <img
            src={recipe.strMealThumb}
            alt="Meal image"
            className="rounded-3xl max-h-[600px] object-cover"
          />

          <Ingredients recipe={recipe} />
          <Instructions instructions={recipe.strInstructions} />
        </>
      )}
    </div>
  );
};

export default Recipe;
