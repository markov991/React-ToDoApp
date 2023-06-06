import React from "react";
import "./Modal.css";

const Modal = ({ task, onClick, events }) => {
  console.log(events);
  if (typeof task === "object") {
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
              <span className={`taskStatus-${task.status}`}>
                {" "}
                {task.status}
              </span>
            </div>
          </div>
        </div>
        <div className="modal-btns">
          <button onClick={() => onClick(task, "confirm")}>Confirm</button>
          <button onClick={() => onClick("close")}>Close</button>
        </div>
      </div>
    );
  } else
    return (
      <div className="modal">
        <form className="new-task-form">
          <div className="input-container">
            <div className="required-fields">
              <label>Task Name</label>
              <input type="text" id="task-name" name="task-name" size={20} />
              <label>Task desription</label>
              <textarea
                name="task-description"
                id="task-description"
                cols={30}
                rows={5}
              />
            </div>
            <div className="optional-fields">
              <label>Chose a date</label>
              <input type="date" />
              <label>Event</label>
              <select>
                <option></option>
                <option>New</option>
                {events.map((event) => {
                  return <option key={event}>{event}</option>;
                })}
              </select>
            </div>
          </div>
          <button className="form-subb-button">Subbmit</button>
        </form>
      </div>
    );
};

export default Modal;
