import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header_container">
      <h1>UseReducer</h1>
      <i class="fa-solid fa-cart-plus">
        <sup>{props.totalCart}</sup>
      </i>
    </div>
  );
};

export default Header;
