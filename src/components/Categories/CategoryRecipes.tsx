import { useParams } from "react-router-dom";

const CategoryRecipes = () => {
  const { id: category } = useParams();

  return <div className="flex-grow max-w-[1200px]">CategoryRecipes</div>;
};

export default CategoryRecipes;
