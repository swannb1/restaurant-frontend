import { useEffect, useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  calories: number;
}

const MenuCard: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("https://restaurant-orders-backend-production.up.railway.app/menuitems");
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }
        const result: MenuItem[] = await response.json();
        setMenuItems(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="p-6 bg-verdant_cream rounded-2xl shadow-md shadow-black">
        <p
          className="text-2xl font-lora font-bold mb-6 text-black
          "
        >
          Menu
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-verdant_squash rounded-2xl shadow-md shadow-black p-4 hover:shadow-lg transition-shadow duration-300 font-lora text-black border-2 border-verdant_soil"
            >
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              <p className="text-sm text-gray-800">
                Price: <span className="font-medium">${item.price}</span>
              </p>
              <p className="text-sm text-gray-800">
                Calories: <span className="font-medium">{item.calories}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
