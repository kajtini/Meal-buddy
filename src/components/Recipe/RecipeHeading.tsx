import { ReactNode } from "react";

interface RecipeHeadingProps {
  title: string;
}

const RecipeHeading = ({ title }: RecipeHeadingProps) => {
  return <h3 className="text-4xl mb-5">{title}</h3>;
};

export default RecipeHeading;
