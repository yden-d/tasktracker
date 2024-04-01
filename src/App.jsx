import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [theme, setActiveTheme] = useState('medium');

  return (
    <>
      <div>
        <Header theme={theme} setActiveTheme={setActiveTheme} />
        <AddTask tasks={taskList} setTaskList={setTaskList} />
        <ShowTask tasks={taskList} setTaskList={setTaskList} />
      </div>
    </>
  )
}

export default App
