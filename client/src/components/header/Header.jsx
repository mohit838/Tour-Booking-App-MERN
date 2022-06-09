import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendar,
  faCalendarDay,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car-rental</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {/* Header Title  */}
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
          Search deals on hotels, homes, and much more...
        </p>
        <button className="headerButton">Signin / Register</button>

        {/* Header Search Item Bar  */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="Where you want to go?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="headerSearchText">Date To Date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} />
            <span className="headerSearchText">2 adults 2 child 1 room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
