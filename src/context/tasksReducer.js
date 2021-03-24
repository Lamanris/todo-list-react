export const tasksReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]}
        case 'DELETE_TASK':
            return {...state, tasks: [...state.tasks].filter(task => task.id !== action.payload)}
        case 'EDIT_TASK':
            return {...state, tasks: [...state.tasks].map(task => task.id === action.payload ? {...task, ...action.editPayload} : task)}
        case 'SET_INFLUENCED_TASKS':
            return {...state, influencedTasks: [...state.tasks]}
        case 'SET_SORTED_TASKS':
            return {...state, sortedTasks: [...state.influencedTasks]}
        // case 'SORT_TASKS':
        //     if (action.payload) {
        //         state.sortedTasks = [...state.sortedTasks].sort((a,b) => a.priority > b.priority ? 1 : -1)
        //         return {...state, influencedTasks: [...state.sortedTasks]}
        //     } else {
        //         return {...state, influencedTasks: [...state.sortedTasks]}
        //     }
        // case 'FILTER_TASKS':
        //     if (action.payload === 'all') {
        //         return {...state, influencedTasks: [...state.tasks]}
        //     }
        //     return {...state, influencedTasks: [...state.sortedTasks].filter(task => task.project === action.payload)}
        default:
            return state
    }
}