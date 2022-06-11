import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const List = () => {
  const location = useLocation();

  const [destinations, setDestinations] = useState(location.state.destinations);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar /> <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={destinations} />
            </div>
            <div className="listItem">
              <label>Check-In-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  // minDate={new date()}
                />
              )}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
