import RecipeHeading from "./RecipeHeading";

interface InstructionsProps {
  instructions: string;
}

const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <div>
      <RecipeHeading title="Instructions" />
      <p className="opacity-50 text-lg sm:text-xl sm:leading-9 leading-8">
        {instructions}
      </p>
    </div>
  );
};

export default Instructions;
