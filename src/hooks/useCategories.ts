import axios from "axios";
import { useState, useEffect } from "react";
import { Category } from "../types/types";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(res.data.categories);
        setLoading(false);
      } catch (err) {
        console.error(`Error while fetching categories: ${err}`);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};
