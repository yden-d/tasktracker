import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});
  const [theme, setActiveTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <div className={"App " + theme}>
        <div className="container">
          <Header theme={theme} setActiveTheme={setActiveTheme} />
          <AddTask
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
          />
          <ShowTask
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
