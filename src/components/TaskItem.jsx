import React from "react";

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <button className="delete" onClick={() => deleteTask(task.taskName)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
