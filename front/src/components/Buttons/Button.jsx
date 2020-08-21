import React from "react";
import "./style.css";

const Button = (props) => {
  return (
    <button
      className="button"
      onClick={(e) => {
        let { onClick } = props;
        if (onClick !== undefined) {
          onClick();
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
