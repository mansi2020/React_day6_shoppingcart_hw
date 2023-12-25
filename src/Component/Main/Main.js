import React, { useState } from "react";
import Productcard from "../Productcard/Productcard";
import cardData from "./../Productlist.json";

const Main = () => {
    let [counter,seCounter] = useState(0);
    const increaseCounterFn = ()=>{
      console.log("increase counter function from app.js");
      const updatedCounter = counter+1;
      seCounter(updatedCounter);
    }
  
    // for cart project
    let [totalcount,settotalCount] = useState(0);
    let onCartUpdate =(type)=>{
      if(type == "INCREASE"){
        settotalCount(totalcount+1);
      }else if(type == "DECREASE"){
        settotalCount(totalcount-1);
      }
      console.log("app.js on cart update");
    }

  return (
    <div className="main_container">
      {/* heading */}
      <div className="main_heading">YOUR BAG</div>

      {/* products */}

      <Productcard
        ProductName={cardData[0].title}
        onCartUpdate={onCartUpdate}
      ></Productcard>
      <Productcard
        ProductName={cardData[1].title}
        onCartUpdate={onCartUpdate}
      ></Productcard>
      <Productcard
        ProductName={cardData[2].title}
        onCartUpdate={onCartUpdate}
      ></Productcard>
      <Productcard
        ProductName={cardData[3].title}
        onCartUpdate={onCartUpdate}
      ></Productcard>
    </div>
  );
};

export default Main;
