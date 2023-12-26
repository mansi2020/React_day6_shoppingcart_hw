import React, { useState } from "react";
import "./productcard.css";
import cardData from "./../Productlist.json";

const Productcard = (props) => {
  // usestate----------------
  const [counter, setCounter] = useState(1);
  const [visible, setIsVisible] = useState(true);
  const [removeVisible, setRemoveVisible] = useState(true);

  // increment counter and decrement counter-------------------------
  const onIncrementCount = () => {
    setCounter(counter + 1);
    props.onChnageCartVal("Increment", props.price);
  };

  const onDecrementCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      props.onChnageCartVal("decrement", props.price);

      if (counter == 1) {
        setIsVisible(false);
      }
    }
  };

  // remove product click on remove------------------
  const onRemoveProduct = () => {
    setRemoveVisible(false);
  };

  return (
    <>
      {visible && removeVisible && (
        <div className="restaurantcard_container">
          {/* product image and content container */}
          <div className="card_image_details">
            <img src={props.img} alt="" />
            <div className="card_details">
              <h1>{props.title}</h1>
              <h3>$ {props.price}</h3>
              <p onClick={onRemoveProduct}>remove</p>
            </div>
          </div>

          {/* qty of product detail*/}
          <div className="cards_qty_details">
            <i class="fa-solid fa-chevron-up" onClick={onIncrementCount}></i>
            <p className="cart_qty">{counter}</p>
            <i class="fa-solid fa-chevron-down" onClick={onDecrementCount}></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Productcard;
