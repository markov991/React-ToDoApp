import React from "react";
import "./AddNewTask.css";

const AddNewTask = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-newTask-btn">
      +
    </button>
  );
};

export default AddNewTask;
