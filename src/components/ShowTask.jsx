import React from "react";

const ShowTask = ({ taskList, setTaskList, setTask }) => {
  const handleTaskEdit = (id) => {
    const selected = taskList.find((task) => task.id === id);
    setTask(selected);
  };

  const handleTaskDelete = (id) => {
    const updatedlist = taskList.filter((task) => task.id !== id);
    setTaskList(updatedlist);
  };

  return (
    <>
      <section className="showTask">
        <div className="head">
          <span className="title">To Do</span>
          <span className="count">{taskList.length}</span>
          <button className={taskList.length === 0 ? "clearDisabled" : "clearAll"} onClick={() => setTaskList([])}>
            Clear
          </button>
        </div>
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                onClick={() => handleTaskEdit(task.id)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => handleTaskDelete(task.id)}
                className="bi bi-trash"
              ></i>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ShowTask;
