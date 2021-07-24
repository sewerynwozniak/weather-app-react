import {FaTimes} from 'react-icons/fa'

const Task = ({task, toggleReminder, deleteTask}) => {
    return (
        <li onDoubleClick={()=>{toggleReminder(task.id)}}>
            {task.text} 
            <span onClick={()=>deleteTask(task.id)}><FaTimes /></span>
        </li>
    )
}

export default Task
