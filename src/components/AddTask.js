import { useState } from "react"; 

function AddTask({addNewTask}) {
    
    const [name, setname] = useState("")
    const [day, setday] = useState("")
    const [reminder, setreminder] = useState(false)

    function submitForm(e){
      e.preventDefault();
      addNewTask(name,day,reminder)
      
      setname("")
      setday("")
      setreminder(false)
      
    }

    return (
        <form className="add-form" onSubmit={submitForm}>
            <div className="form-control">
                <label>Add Task</label>
                <input type="text" 
                value={name} 
                onInput={(e)=>(setname(e.target.value))} 
                placeholder="Add Task" />
            </div>
            <div className="form-control">
                <label>Add Day & Time</label>
                <input type="text" 
                value={day} 
                onInput={(e)=>(setday(e.target.value))}
                placeholder="Add Day & Time" />
            </div>
            <div>
                <input type="checkbox" 
                checked={reminder} 
                onChange={(e)=>(setreminder(e.currentTarget.checked))} />
                <label> Reminder</label>
            </div>
            <input type="submit" 
            className="btn btn-block" 
            value="Create New Task" />
        </form>
    )
}

export default AddTask
