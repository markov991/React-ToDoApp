import React from "react";
import "./Modal.css";

const Modal = ({ task, onClick }) => {
  return (
    <div className="modal">
      <div className="modal-taskName">{task.taskName}</div>
      <div className="modal-taskDescription-container">
        <div className="modal-taskDescription">{task.description}</div>
        <div className="modal-otherInfo">
          <div>Date added: {task.dateCreated}</div>
          <div>Deadline date: {task.date}</div>
          <div>
            Task status:
            <span className={`taskStatus-${task.status}`}> {task.status}</span>
          </div>
        </div>
      </div>
      <div className="modal-btns">
        <button onClick={() => onClick("confirm")}>Confirm</button>
        <button onClick={() => onClick("close")}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
