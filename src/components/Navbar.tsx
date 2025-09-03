import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="px-4 flex items-center justify-between h-[80px] bg-verdant_soil/80">
        <div>
          <Link to="/">
            <img src="/src/assets/images/v&cLogo.svg" alt="Verdant & Co. Logo" className="h-[70px] border-verdant_cream border-2" />
          </Link>
        </div>
        <div>
          <p className="font-garamond text-4xl text-verdant_cream pl-1">Verdant & Co.</p>
        </div>
        <div>
          <p>hamburger menu</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
