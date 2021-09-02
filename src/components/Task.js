import { FaTimes } from "react-icons/fa"; 


function Task({task,reminderSetting,deleteTask}) {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>reminderSetting(task.id)}>
            <h3>{task.task} <FaTimes style={{color:"red"}} onClick={()=>deleteTask(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
