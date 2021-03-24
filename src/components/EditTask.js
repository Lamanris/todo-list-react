import React, {useContext, useState} from 'react';
import {TasksContext} from "../context/tasks-context";

const EditTask = () => {
    const {setIsEditingTask, editTask, toEditTask} = useContext(TasksContext)
    const [editedValue, setEditedValue] = useState({})
    const editTaskSend = () => {
        editTask(toEditTask.id, editedValue)
        setIsEditingTask(false)
    }
    const editTaskHandle = (e) => {
        setEditedValue({...editedValue, [e.target.name] : e.target.value})
    }
    return (
        <div className="task-update">
            <div className="task-update__item">
                <p> Заголовок задачи </p>
                <input type="text" name="title" className="task-update__item-input" defaultValue={toEditTask.title} onChange={editTaskHandle}/>
            </div>
            <div className="task-update__item">
                <p> Название проекта </p>
                <input type="text" name="project" className="task-update__item-input" defaultValue={toEditTask.project} onChange={editTaskHandle}/>
            </div>
            <div className="task-update__item">
                <p> Приоритет </p>
                <select name="priority" className="task-update__item-input" defaultValue={toEditTask.priority} onChange={editTaskHandle}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="task-update__item" >
                <p> Описание </p>
                <textarea name="description" className="task-update__item-input" defaultValue={toEditTask.description} onChange={editTaskHandle}></textarea>
            </div>
            <div className="task-update__buttons">
                <button className="todo__btn task-update__btn-save" type="button" onClick={editTaskSend}>Сохранить</button>
                <button className="todo__btn" type="button" onClick={() => setIsEditingTask(false)} >Отменить</button>
            </div>
        </div>
    );
};

export default EditTask;