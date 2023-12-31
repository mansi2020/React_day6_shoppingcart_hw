import React, { useState, useEffect } from "react";
import Productcard from "../Productcard/Productcard";
import cardData from "./../Productlist.json";
import "./main.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = (props) => {
  // aos animation
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  // use state for product list-------------------------
  const [totalProduct, setTotalProduct] = useState(4);
  const [totalPrice, setTotalPrice] = useState(2199.96);
  const [visible, setVisible] = useState(true);

  // total product qty and total price---------------------
  const onChnageCartVal = (condition, price) => {
    if (condition == "Increment") {
      setTotalProduct(totalProduct + 1);
      setTotalPrice((preTotalPrice) => {
        let newPrice = parseFloat(preTotalPrice) + parseFloat(price);
        let num = parseFloat(newPrice).toFixed(2);
        console.log(newPrice);
        return num;
      });
    } else if (condition == "decrement") {
      setTotalProduct(totalProduct - 1);
      setTotalPrice((preTotalPrice) => {
        let newPrice = parseFloat(preTotalPrice) - parseFloat(price);
        let num = parseFloat(newPrice).toFixed(2);
        console.log(newPrice);
        return num;
      });
    }
  };
  props.totalProduct(totalProduct);

  // on click on clear cart button-----------------------------
  const onClearCart = () => {
    setVisible(false);
  };

  return (
    <>
      {/* heading */}
      <div className="main_heading" data-aos="flip-left">
        YOUR BAG
      </div>
      {visible ? (
        <div className="main_container" data-aos="flip-left">
          {/* products */}
          <div className="main_products_list">
            {cardData.map((item) => {
              return (
                <Productcard
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  key={item.id}
                  onChnageCartVal={onChnageCartVal}
                ></Productcard>
              );
            })}
          </div>

          <hr />

          {/*total value  */}
          <div className="Main_total_Amount">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>

          {/* clear button */}
          <div className="Main_clear_btn">
            <button onClick={onClearCart}>Clear Cart</button>
          </div>
        </div>
      ) : (
        <div className="mainAlterNameUi">
          <h1>is currently empty !</h1>
        </div>
      )}
    </>
  );
};

export default Main;
