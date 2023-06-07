import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ task, onClick, events, x }) => {
  const [newEventInputField, setNewEventInputField] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);
  const [selectedEventField, setSelectedEventField] = useState();
  const [taskNameInput, setTaskNameInput] = useState();
  const [taskDescriptionInput, setTaskDescriptionInput] = useState();
  const [taskDateInput, setTaskDateInput] = useState();

  // const [newTask, setNewTask] = useState();

  const selectEventHandeler = (event) => {
    if (event.target.value === "New") {
      setNewEventInputField(true);
    } else {
      setNewEventInputField(false);
      setSelectedEventField({ eventName: event.target.value });
    }
    console.log(event.target.value);
  };
  const selectNewEventHandeler = (event) => {
    setSelectedEventField({ eventName: event.target.value });

    console.log(event.target.value);
  };
  const taskNameChangeHandler = (e) => {
    setTaskNameInput({ taskName: e.target.value });
  };
  const taskDescriptionChangeHandler = (e) => {
    setTaskDescriptionInput({ description: e.target.value });
  };
  const taskDateChangeHandler = (e) => {
    setTaskDateInput({ date: e.target.value });
  };

  const submitHandeler = (e) => {
    e.preventDefault();

    x({
      selectedEventField,
      taskNameInput,
      taskDescriptionInput,
      taskDateInput,
    });

    console.log(
      selectedEventField,
      taskNameInput,
      taskDescriptionInput,
      taskDateInput
    );
  };

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
              <span className={`taskStatus-${task.status}`}>{task.status}</span>
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
              <label>
                Task Name
                <input
                  onChange={taskNameChangeHandler}
                  type="text"
                  id="task-name"
                  name="task-name"
                  size={20}
                />
              </label>
              <label>
                Task desription
                <textarea
                  onChange={taskDescriptionChangeHandler}
                  name="task-description"
                  id="task-description"
                  cols={30}
                  rows={5}
                />
              </label>
            </div>
            <div className="optional-fields">
              <label>
                Chose a date
                <input onChange={taskDateChangeHandler} type="date" />
              </label>
              <label>
                Event
                <select onChange={selectEventHandeler}>
                  <option></option>
                  <option>New</option>
                  {events.map((event, i) => {
                    return <option key={`event-${event}`}>{event}</option>;
                  })}
                </select>
                {newEventInputField && (
                  <input
                    onChange={selectNewEventHandeler}
                    type="text"
                    name="event-name"
                    size="20"
                    placeholder="Plaese enter event name"
                  ></input>
                )}
              </label>
            </div>
          </div>
          <button
            onClick={submitHandeler}
            type="submit"
            className="form-subb-button"
          >
            Subbmit
          </button>
        </form>
      </div>
    );
};

export default Modal;
