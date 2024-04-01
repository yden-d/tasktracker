import React from 'react';

const AddTask = ({tasks, setTaskList}) => {
    return (
        <>
            <section className="addTask">
                <form action="">
                    <input type="text" name="task" id="" autoComplete="off" placeholder="Add Task" maxLength="50" />
                    <button>Add</button>
                </form>
            </section>
        </>
    );
};

export default AddTask;