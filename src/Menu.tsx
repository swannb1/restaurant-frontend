import MenuCard from "./components/MenuCard";
import Navbar from "./components/Navbar";

const Menu = () => {
  return (
    <div>
      <div>
        <div className="fixed w-full">
          <Navbar />
        </div>
        <div className="bg-verdant_green h-dvh w-dvw px-4 py-[86px]">
          <MenuCard />
        </div>
      </div>
    </div>
  );
};

export default Menu;
