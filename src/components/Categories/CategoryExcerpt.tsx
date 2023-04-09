import { Category } from "../../hooks/useCategories";
import { Link } from "react-router-dom";

interface CategoryExcerptProps {
  category: Category;
}

const CategoryExcerpt = ({ category }: CategoryExcerptProps) => {
  const truncateDescription = (description: string, maxWords: number) => {
    const words = description.split(" ");

    if (words.length > maxWords) {
      description = words.slice(0, maxWords).join(" ");

      return `${description}...`;
    }

    return description;
  };

  return (
    <li className="bg-secondary rounded-3xl overflow-hidden flex flex-col shadow-md">
      <img
        className="h-56 w-full object-cover"
        src={category.strCategoryThumb}
        alt="roasted chicken"
      />

      <div className="p-5 flex flex-col gap-5 flex-grow">
        <p className="text-4xl">{category.strCategory}</p>
        <p className="opacity-50 leading-8">
          {truncateDescription(category.strCategoryDescription, 35)}
        </p>
        <Link
          to={`/categories/${category.strCategory}`}
          className="bg-gradient-to-b from-accent to-accent-dark w-full py-3 rounded-3xl mt-auto hover:scale-105 transition-all duration-500 text-center"
        >
          Explore category!
        </Link>
      </div>
    </li>
  );
};

export default CategoryExcerpt;
