import { Link, useParams } from "react-router-dom";
import { useCategoryMeals } from "../../../hooks/useCategoryMeals";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import MealsList from "./MealsList";
import { PuffLoader } from "react-spinners";

const CategoryMeals = () => {
  const { id: category } = useParams();

  if (!category) return <div>No category provided</div>;

  const { categoryMeals, loading } = useCategoryMeals(category);

  return (
    <div className="flex-grow max-w-[1200px] p-5 flex flex-col">
      <Link
        to="/categories"
        className="bg-gradient-to-b from-accent to-accent-dark py-3 px-5  text-center rounded-3xl flex items-center gap-5 justify-center mb-5 max-w-[256px]"
      >
        <HiOutlineArrowNarrowLeft size={20} />
        Back to categories
      </Link>

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

      {!categoryMeals && <div>No meals</div>}
      {categoryMeals && (
        <>
          <p className="text-3xl sm:text-4xl lg:text-5xl mb-5 ">
            {category} meals
          </p>
          <MealsList categoryMeals={categoryMeals} />
        </>
      )}
    </div>
  );
};

export default CategoryMeals;
