import React from 'react';

const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updated = taskList.map((t) => (
                t.id === task.id ? {id : task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : t
            ));
            setTaskList(updated);
            setTask({});

        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
            setTaskList([...taskList, newTask]);
            setTask({});
        }

        
    }
    return (
        <>
            <section className="addTask">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="task" value={task.name || ""} onChange={e => setTask({...task, name: e.target.value})} autoComplete="off" placeholder="Add Task" maxLength="25" />
                    <button>{task.id ? "Update" : "Add"}</button>
                </form>
            </section>
        </>
    );
};

export default AddTask;