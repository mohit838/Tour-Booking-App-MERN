import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/289804334.jpg?k=676a265c2da66e1b14e95eb8e41343e8c9c49eafc5328cc56a23d2fc313e8ff8&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featureTitle">
          <h1>Dublin</h1>
          <h2>7915 propertise</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featureTitle">
          <h1>Austin</h1>
          <h2>7454 propertise</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/134518316.jpg?k=0917b5986855da3eb4e332c19b66bdb7e604153ab198f997da2d6776379a09be&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featureTitle">
          <h1>Poland</h1>
          <h2>6497 propertise</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
