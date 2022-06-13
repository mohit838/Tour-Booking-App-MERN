import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItems">
      <img
        className="siImg"
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/364567017.jpg?k=60fbc38e0f97ce03106e04b910a7dbb71bf413798e88e85b50b2ace54d9db917&o=&hp=1"
        alt=""
      />
      <div className="sDesc">
        <h1 className="siTitle">Tower Stree Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubTitle">Studio Apartment with air condition</span>
        <span className="siFeature">
          Entire studio . 1 bathroom . 21m-sq 1 full bed
        </span>
        <span className="siCancleOp">Free Cancellation</span>
        <span className="siCancleOpSubtitle">
          You can cancsle later on! So lock it now at this discount price.
        </span>
      </div>
      <div className="sDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Include Taxes and Fess</span>
          <button className="siCheckButton">Check Aviability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
