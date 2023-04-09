import plateImage from "../../assets/salad-plate.jpg";
import HomeDescription from "./HomeDescription";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-grow w-full p-5 max-w-[1200px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10 sm:justify-between">
        <img
          className="rounded-3xl max-h-[500px] lg:max-h-[700px] sm:order-1  "
          src={plateImage}
          alt="plate image with salad inside and orange juice on the side"
        />
        <div className="flex flex-col items-center gap-5 sm:self-stretch my-auto lg:gap-7 w-full">
          <HomeDescription />
          <Link
            to="/categories"
            className="bg-gradient-to-b from-accent to-accent-dark py-3 w-full rounded-3xl max-w-sm text-center hover:scale-105 transition-all duration-500"
          >
            See recipes!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
