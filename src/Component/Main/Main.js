import React, { useState } from "react";
import Productcard from "../Productcard/Productcard";
import cardData from "./../Productlist.json";
import './main.css';

const Main = () => {

    // use state for product list
    const [counterVal,setCounterVal] = useState(1);
    const [visible,setVisible] = useState(true);

    // onChnageCounterVal fun
    let onChnageCounterVal = (value)=>{
        setCounterVal(value);
    }    

    // on click on clear cart button
    const onClearCart = ()=>{
        setVisible(false);
    }

  return (
    <>
    {/* heading */}
    <div className="main_heading">YOUR BAG</div>
    {visible ? (
    <div className="main_container">
      

      {/* products */}
      <div className="main_products_list">
        {cardData.map((item) => {
          return <Productcard
            title={item.title}
            img={item.img}
            price={item.price}
            key={item.id}
            onChangeCard={onChnageCounterVal}
          ></Productcard>;
        })}
      </div>

      <hr />

      {/*total value  */}
      <div className="Main_total_Amount">
        <p>Total</p>
        <p>${}</p>
      </div>

      {/* clear button */}
      <div className="Main_clear_btn">
        <button onClick={onClearCart}>Clear Cart</button>
      </div>
    </div>) : <div className="mainAlterNameUi">
            <h1>Cart Cleared</h1>
        </div>}
    </>
  );
};

export default Main;
