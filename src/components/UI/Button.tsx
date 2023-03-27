import React from "react";
import "./Button.css";

// Define the props for the Button component, with optional properties
type ButtonProps = {
  children?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

// Create the Button component, destructuring and setting default values for props
const Button = ({
  children = "",
  className = "",
  type = "button",
  onClick = () => {},
}: ButtonProps) => (
  // Render the button element with dynamic props
  <button className={`button ${className}`} type={type} onClick={onClick}>
    {children}
  </button>
);

// Export the Button component as default
export default Button;
