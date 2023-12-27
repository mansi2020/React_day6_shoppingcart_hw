import React, { useState, useEffect } from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header_container">
      <h1>UseReducer</h1>
      <i class="fa-solid fa-cart-plus">
        <div>{props.totalCart}</div>
      </i>
    </div>
  );
};

export default Header;
