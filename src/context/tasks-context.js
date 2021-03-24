import React, {createContext, useReducer, useState, useEffect} from 'react'
import {tasksReducer} from "./tasksReducer";


export const TasksContext = createContext()

const initialState = {
    tasks: [
        {
            title: 'Задача 1',
            project: '1',
            priority: 7,
            description: 'something funny',
            id: Math.floor(Math.random() * 1000)
        },
        {
            title: 'Задача 2',
            project: '1sadf',
            priority: 5,
            description: 'something funny',
            id: Math.floor(Math.random() * 1000)
        },
        {
            title: 'Задача 3',
            project: '1',
            priority: 6,
            description: 'something funny',
            id: Math.floor(Math.random() * 1000)
        },
        {
            title: 'Задача 4',
            project: 'psdf1',
            priority: 2,
            description: 'something funny',
            id: Math.floor(Math.random() * 1000)
        },
    ],
    influencedTasks: [],
    filteredTasks: [],
    isSorting: false,
}

export const TasksContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const [isAddingTask, setIsAddingTask] = useState(false)

    const [isEditingTask, setIsEditingTask] = useState(false)
    const [toEditTask, setToEditTask] = useState({})

    useEffect(() => {
        setInfluencedTasks()
        setFilterTasks()
    },[state.tasks])

    const setInfluencedTasks = () => dispatch({type: 'SET_INFLUENCED_TASKS'})
    const setFilterTasks = () => dispatch({type: 'SET_FILTERED_TASKS'})
    const setIsSorting = (condition) => dispatch({type: 'SET_IS_SORTING', payload: condition})
    const addTask = (task) => dispatch({type: 'ADD_TASK', payload: task})
    const deleteTask = (id) => dispatch({type: 'DELETE_TASK', payload: id})
    const editTask = (id, value) => dispatch({type: 'EDIT_TASK', payload: id, editPayload: value})
    const filterTasks = (type) => dispatch({type: 'FILTER_TASKS', payload: type})

    const contextValues = {
        ...state,
        addTask,
        deleteTask,
        editTask,
        setIsAddingTask,
        isAddingTask,
        setIsEditingTask,
        isEditingTask,
        setToEditTask,
        toEditTask,
        filterTasks,
        setIsSorting
    }
    return (
        <TasksContext.Provider value={contextValues}>
            {children}
        </TasksContext.Provider>
    )
}