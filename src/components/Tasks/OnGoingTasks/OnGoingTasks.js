import React from "react";
import "./OnGoingTasks.css";

const OnGoingTasks = ({ task }) => {
  return (
    <div>
      <h3 className="task-header">ONGOING TASKS</h3>
      <div className="ongoing-task-container">
        {task
          .filter((task) => task.status === "ongoing")
          .map((filterdtask, index) => {
            return (
              <div className="ongoing-task-box" key={`ongoing__${index}`}>
                <h4 className="task-name">{filterdtask.taskName}</h4>
                <div className="task-description">
                  <p>{filterdtask.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default OnGoingTasks;
