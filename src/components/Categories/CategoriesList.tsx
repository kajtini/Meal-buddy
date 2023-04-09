import { Category } from "../../hooks/useCategories";
import CategoryExcerpt from "./CategoryExcerpt";

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch justify-stretch">
      {categories.map((category) => (
        <CategoryExcerpt key={category.idCategory} category={category} />
      ))}
    </ul>
  );
};

export default CategoriesList;
