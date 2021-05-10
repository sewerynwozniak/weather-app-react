import Task from './Task';

const Tasks = ({tasks, toggleReminder, deleteTask}) => {
    return (
        <ul>
            {tasks.map(task=>(
                <Task 
                    key={task.id}
                    task={task}
                    toggleReminder={toggleReminder}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    )
}

export default Tasks
