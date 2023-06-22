import React, { useState } from "react";
import "./DateFilter.css";

const DateFilter = ({ onClick }) => {
  const [dateSelected, setDateSelected] = useState();

  const dateChangeHandeler = (e) => {
    setDateSelected(e.target.value);
  };

  return (
    <div className="calendar-filter-box">
      <input onChange={dateChangeHandeler} type="date" id="date" />
      <div className="btn-filter-box">
        <button onClick={() => onClick(dateSelected, "FILTER_BY_INPUT_DATE")}>
          Filter by input date
        </button>
        <button
          onClick={() => onClick(dateSelected, "FILTER_BY_DEADLINE_DATE")}
        >
          Filter by deadline date
        </button>
      </div>
    </div>
  );
};
export default DateFilter;
