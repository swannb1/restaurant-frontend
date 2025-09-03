type ButtonProps = {
  name: string;
  handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ name, handleClick }) => {
  return (
    <div>
      <button
        className="cursor-pointer font-montserrat bg-verdant_cream text-verdant_pepper rounded-3xl px-6 py-2 shadow-md shadow-black hover:bg-verdant_pepper hover:text-verdant_cream"
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
