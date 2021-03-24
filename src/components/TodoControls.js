import React, {useContext} from 'react';
import {TasksContext} from "../context/tasks-context";

const TodoControls = () => {
    const {tasks, setIsAddingTask, sortTasks, filterTasks} = useContext(TasksContext)
    const taskProjects = tasks.map(el => el.project).filter((el, ind, arr) => ind === arr.lastIndexOf(el))
    return (
        <div className="todo-controls">
            <button className="todo__btn" onClick={() => setIsAddingTask(true)}>Добавить</button>
            <div className="todo-controls__sort">
                <input type="checkbox" className="todo-controls__sort-checkbox" onChange={(e) => sortTasks(e.target.checked)}/>
                <p className="todo__text">по приоритету</p>
            </div>
            <select className="todo-controls__select" onChange={(e) => filterTasks(e.target.value)}>
                <option value="all">All</option>
                {
                    taskProjects.map(el => <option value={el}>{el}</option>)
                }
            </select>
        </div>
    );
};

export default TodoControls;