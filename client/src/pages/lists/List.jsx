import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

const List = () => {
  return (
    <div>
      <Navbar /> <Header type="list" />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
};

export default List;
