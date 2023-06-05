import React from "react";
import "./UnfinishedTasks.css";

const UnfinishedTasks = ({ task, onClick }) => {
  if (task.filter((task) => task.status === "unfinished") < 1) return;
  return (
    <div>
      <h3 className="task-header">UNFINISHED TASKS</h3>
      <div className="task-container">
        {task
          .filter((task) => task.status === "unfinished")
          .map((filterdtask, index) => {
            return (
              <div
                onClick={() => onClick(filterdtask)}
                className="unfinished-task-box"
                key={`unfinished__${index}`}
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

export default UnfinishedTasks;
