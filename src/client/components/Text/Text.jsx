import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Text = props => {
  const { size, className, weight, children, color } = props;
  const fontSize = "fontsize-";
  const fontWeight = "fontweight-";
  const colorClass = "fontcolor-";
  const classes = `${colorClass + color} ${className} ${fontWeight +
    weight} ${fontSize + size}`;
  console.log(classes);
  return (
    <div>
      <p className={classes}>{children}</p>
    </div>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.oneOf([
    "font0",
    "font1",
    "font2",
    "font3",
    "font4",
    "font5",
    "font6",
    "font7"
  ]),
  weight: PropTypes.oneOf(["light", "regular", "bold", "semiBold"]),
  color: PropTypes.oneOf([
    "blue",
    "blueLight",
    "blueExtraLight",
    "blueGrey",
    "blueGreyLight",
    "greyDark",
    "grey",
    "greyLight",
    "white",
    "black",
    "red",
    "yellow",
    "green"
  ])
};

Text.defaultProps = {
  className: null,
  size: 'font2',
  weight: "bold",
  color: "black"
};

export default Text;
