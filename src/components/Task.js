import React, {useState, useContext} from 'react';
import {TasksContext} from "../context/tasks-context";

const Task = ({task}) => {
    const {tasks, deleteTask, setIsEditingTask, setToEditTask} = useContext(TasksContext)
    const [showDesc, setShowDesc] = useState(false)
    return (
        <div className="todo-list__task">
            <p className="todo-list__task-title">{task.title ? task.title : 'Task-example'}</p>
            <div className="todo-list__task-info">
                <p className="todo__subtitle todo-list__task-subtitle">Проект: <span className="todo__text todo-list__task-text">{task.project ? task.project : 'Project-1'}</span></p>
                <p className="todo__subtitle todo-list__task-subtitle">Приоритет: <span className="todo__text todo-list__task-text">{task.priority}</span></p>
            </div>
            {
                showDesc && <p className="todo__text todo-list__task-description">{task.description ? task.description : 'Description'}</p>
            }
            <div className="todo-list__task-controls">
                <button type="button" className="todo__btn" onClick={() => {
                    setIsEditingTask(true)
                    setToEditTask(task)}}>Изменить</button>
                <button type="button" className="todo__btn" onClick={() => {
                    deleteTask(task.id)
                    tasks.length === 1 && setIsEditingTask(false)}}>Закрыть</button>
                <button type="button" className="todo__btn" onClick={() => setShowDesc(!showDesc)}>{showDesc ? 'Свернуть' : 'Развернуть'}</button>
            </div>
        </div>
    );
};

export default Task;