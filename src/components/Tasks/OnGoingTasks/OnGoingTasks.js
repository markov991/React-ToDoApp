import React from "react";
import "./OnGoingTasks.css";

const OnGoingTasks = ({ task, onClick }) => {
  if (task.filter((task) => task.status === "ongoing") < 1) return;
  return (
    <div>
      <h3 className="task-header">ONGOING TASKS</h3>
      <div className="task-container">
        {task
          .filter((task) => task.status === "ongoing")
          .map((filterdtask, index) => {
            return (
              <div
                onClick={() => onClick(filterdtask)}
                className="ongoing-task-box"
                key={`ongoing__${index}`}
              >
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
