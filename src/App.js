import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

import { useState } from "react";

let allTasks = [
  {
      id : 1,
      task : "meeting with anees",
      day : "24 jan 2021",
      reminder : true
  },
  {
      id : 2,
      task : "meeting with haider",
      day : "24 feb 2021",
      reminder : false
  }
]

function App() {
  
  const [showButton, setshowButton] = useState(false)
  const [tasks, settasks] = useState(allTasks)

  function showBtn(){
    setshowButton(!showButton);
  }

  function reminderSetting(id){
    settasks(tasks.map(task=> (task.id === id ? {...task,reminder:!task.reminder} : task)))
  }
  
  function deleteTask(id){
    settasks(tasks.filter(task=>task.id !== id))
  }

  function addNewTask(name,day,reminder){
    let id = Math.random() * 100000
    settasks([...tasks,{id:id,task:name,day:day,reminder:reminder}])
  }

  return (
    <div className="container">
        <Header showBtn={showBtn} showButton={showButton}/>
        { showButton && <AddTask addNewTask={addNewTask} /> }
        <Tasks tasks={tasks} deleteTask={deleteTask} reminderSetting={reminderSetting}/>
    </div>
  );
}

export default App;
