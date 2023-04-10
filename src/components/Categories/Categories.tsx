import { useCategories } from "../../hooks/useCategories";
import CategoriesList from "./CategoriesList";
import { PuffLoader } from "react-spinners";
import { useEffect } from "react";

const Categories = () => {
  const { categories, loading } = useCategories();

  return (
    <div className="flex-grow flex flex-col w-full p-5 max-w-[1200px]">
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

      {!categories && <p>No categories</p>}
      {categories && (
        <>
          <p className="text-3xl sm:text-4xl lg:text-5xl mb-5 ">
            Choose your category
          </p>
          <CategoriesList categories={categories} />
        </>
      )}
    </div>
  );
};

export default Categories;
