import { useParams } from "react-router-dom";
import { useCategoryMeals } from "../../hooks/useCategoryMeals";

const CategoryMeals = () => {
  const { id: category } = useParams();

  if (!category) return <div>No category provided</div>;

  const { categoryMeals, loading } = useCategoryMeals(category);

  return <div className="flex-grow max-w-[1200px]">CategoryMeals</div>;
};

export default CategoryMeals;
