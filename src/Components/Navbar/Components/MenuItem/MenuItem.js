import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const MenuItem = ({ mode, text, carNumber, to, id }) => {
  let isTitle = false;
  let isSection = false;
  let isCar = false;
  if (mode === "title") {
    isTitle = true;
  } else {
    if (mode === "section") {
      isSection = true;
    } else {
      isCar = true;
    }
  }
  return (
    <>
      {isTitle && (
        <div>
          <Link to={to}>
            <h1 id={id} style={{ cursor: "pointer", color: "#000" }}>
              {text}
            </h1>
          </Link>
        </div>
      )}
      {isSection && (
        <Link to={to}>
          {" "}
          <h3
            style={{
              cursor: "pointer",
              color: "#000",
              textDecoration: "none",
            }}
          >
            {text}{" "}
          </h3>
        </Link>
      )}
      {isCar && (
        <Link to={to}>
          <CartWidget id={id} elements={carNumber} />
        </Link>
      )}
    </>
  );
};

export default MenuItem;
