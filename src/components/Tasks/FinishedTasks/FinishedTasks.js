import React from "react";
import "./FinishedTasks.css";

const FinishedTasks = ({ task, onClick }) => {
  if (task.filter((task) => task.status === "finished") < 1) return;
  return (
    <div>
      <h3 className="task-header">FINISHED TASKS</h3>
      <div className="task-container">
        {task
          .filter((task) => task.status === "finished")
          .map((filterdtask, index) => {
            return (
              <div
                onClick={() => onClick(filterdtask)}
                className="finished-task-box"
                key={`finished__${index}`}
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

export default FinishedTasks;
