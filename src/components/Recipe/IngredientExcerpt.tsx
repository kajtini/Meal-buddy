interface IngredientExcerptProps {
  ingredient: string;
  measure: string;
}

const IngredientExcerpt = ({ ingredient, measure }: IngredientExcerptProps) => {
  return (
    <li className="flex items-center justify-between text-lg sm:text-xl">
      <p>{ingredient}</p>
      <p>{measure}</p>
    </li>
  );
};

export default IngredientExcerpt;
