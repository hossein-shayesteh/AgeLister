import React from "react";
import "./Card.css";

// Creating a TypeScript type for Card component properties
type propsType = {
  children?: React.ReactNode; // Optional children to be passed down into the card
  className?: string; // Optional CSS classes to append to the card component
};
const Card = (props: propsType) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
