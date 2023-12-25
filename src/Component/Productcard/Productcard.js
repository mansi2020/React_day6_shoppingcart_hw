import React from "react";
import "./productcard.css";

const Productcard = (props) => {
  return (
    <div className="restaurantcard_container">
      <div className="card_image_details">
        <img src={props.img} alt="" />
        <div className="card_details">
            <h1>{props.title}</h1>
            <h3>$ {props.price}</h3>
            <p>remove</p>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
