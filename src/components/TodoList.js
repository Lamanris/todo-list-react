import React, {useState, useContext} from 'react';
import Task from "./Task";
import TodoControls from "./TodoControls";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import {TasksContext} from "../context/tasks-context";

const TodoList = () => {
    const {influencedTasks, isEditingTask, isAddingTask} = useContext(TasksContext)


    return (
        <div className="todo">
            <h1 className="todo__title">Todo:</h1>
            <div className="todo-list">
                {
                    influencedTasks.length ? influencedTasks.map((el,ind) => <Task task={el} key={ind}/>) : <p>Список пуст</p>
                }
            </div>
            {
                !isAddingTask ? !isEditingTask ? <TodoControls /> : <EditTask/> : <AddTask/>
            }
        </div>
    )
}

export default TodoList;