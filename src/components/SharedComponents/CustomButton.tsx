

import { Link } from "react-router-dom";
import { Button, ButtonProps } from "../ui/button";

interface CustomButtonProps extends ButtonProps {
  icon?: React.ComponentType<object>;
  to?: string; // Add the to prop for specifying the target URL
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon: Icon,
  className,
  children,
  to,
  ...rest
}) => {
  if (to) {
    return (
      <Link to={to}>
        {/* Use the Link component with the Button styles */}
        <Button
          className={`bg-custom-main active:bg-custom-mainDark hover:bg-custom-mainDark rounded transition duration-300 active:scale-105 transform overflow-hidden text-custom-white font-Quicksand dark:font-merriweather font-bold tracking-wider ${className}`}
          {...rest}
        >
          {children}
          {Icon && (
            <span className="pl-2 text-xl">
              <Icon />
            </span>
          )}
        </Button>
      </Link>
    );
  } else {
    return (
      <Button
        className={`bg-custom-main active:bg-custom-mainDark hover:bg-custom-mainDark rounded transition duration-300 active:scale-105 transform overflow-hidden text-custom-white font-Quicksand dark:font-merriweather font-bold tracking-wider ${className}`}
        {...rest}
      >
        {children}
        {Icon && (
          <span className="pl-2 text-xl">
            <Icon />
          </span>
        )}
      </Button>
    );
  }
};

export default CustomButton;

// Usage:
{
  /* <CustomButton to="/donate" icon={FaDonate}>Donate Now</CustomButton> */
}
