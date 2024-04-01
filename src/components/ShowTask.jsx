import React from 'react';

const ShowTask = ({tasks, setTaskList}) => {
    const handleTaskDelete = (id) => {
    };

    const handleTaskEdit = () => {
        newTask = {};
        setTaskList([...tasks, newTask]);
    }
    return (
        <>
            <section className="showTasks">
                <div className="head">
                    <span className="title">To Do</span>
                    <span className='count'>{tasks.length}</span>
                    <button className='clearAll'>Clear</button>
                </div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                        <p>
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i onClick={handleTaskEdit} className="bi bi-pencil-square"></i>
                        <i onClick={handleTaskDelete(task.id)} className="bi bi-trash"></i>
                    </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default ShowTask;