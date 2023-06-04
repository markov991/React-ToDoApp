import React from "react";
import "./DateFilter.css";

const DateFilter = () => {
  return (
    <div className="calendar-filter-box">
      <input type="date" id="date" />
      <div className="btn-filter-box">
        <button>Filter by input date</button>
        <button>Filter by dedline date</button>
      </div>
    </div>
  );
};
export default DateFilter;
