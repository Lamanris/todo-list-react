import React, {useContext, useState} from 'react';
import {TasksContext} from "../context/tasks-context";

const AddTask = () => {
    const {addTask, setIsAddingTask} = useContext(TasksContext)
    const [newTask, setNewTask] = useState({})
    const handleTask = (e) => setNewTask({...newTask, [e.target.name] : e.target.value, id: Math.floor(Math.random() * 1000)})
    const addNewTask = () => {
        newTask.hasOwnProperty('priority') ? addTask(newTask) :  addTask({...newTask, priority : 1})
        setIsAddingTask(false)
    }
    return (
        <div className="task-update">
            <div className="task-update__item">
                <p> Заголовок задачи </p>
                <input type="text" name="title" className="task-update__item-input" onChange={handleTask}/>
            </div>
            <div className="task-update__item">
                <p> Название проекта </p>
                <input type="text" name="project" className="task-update__item-input" onChange={handleTask}/>
            </div>
            <div className="task-update__item">
                <p> Приоритет </p>
                <select name="priority" className="task-update__item-input" onChange={handleTask}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="task-update__item">
                <p> Описание </p>
                <textarea name="description" className="task-update__item-input" onChange={handleTask}></textarea>
            </div>
            <div className="task-update__buttons">
                <button className="todo__btn task-update__btn-save" type="button" onClick={addNewTask}>Сохранить</button>
                <button className="todo__btn" type="button" onClick={() => setIsAddingTask(false)}>Отменить</button>
            </div>
        </div>
    );
};

export default AddTask;