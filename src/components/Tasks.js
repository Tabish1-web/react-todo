import Task from "./Task";

function Tasks({tasks,reminderSetting,deleteTask}) {
    return (
        <>
          {tasks.map(task=><Task 
          deleteTask={deleteTask} 
          key={task.id} 
          task={task} 
          reminderSetting={reminderSetting}/>)}  
        </>
    )
}

export default Tasks
