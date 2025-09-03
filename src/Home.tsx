import { Link, useNavigate } from "react-router";
import Button from "./components/Button";

const Home = () => {
  const navigate = useNavigate();
  const tempClick = () => {
    console.log("This Worked");
  };
  const menuClick = () => {
    navigate(`/menu`);
  };

  return (
    <div>
      <div className="bg-verdant_green h-dvh w-dvw flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-8">
          <div>
            <p className="font-garamond text-verdant_cream text-center text-6xl">Verdant & Co.</p>
            <p className="font-montserrat text-verdant_cream text-center text-xl">Café • Eats • Drinks</p>
          </div>
          <div className="flex gap-12">
            <Button name="Order Now" handleClick={tempClick} />
            <Button name="Explore Our Menu" handleClick={menuClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
