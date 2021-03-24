export const tasksReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]}
        case 'DELETE_TASK':
            return {...state, tasks: [...state.tasks].filter(task => task.id !== action.payload)}


        case 'EDIT_TASK':
            return {...state, tasks: [...state.tasks].map(task => task.id === action.payload ? {...task, ...action.editPayload} : task)}

        case 'SET_INFLUENCED_TASKS':
            if (state.isSorting) {
                return {...state, influencedTasks: [...state.tasks].sort((a,b) => a.priority > b.priority ? 1 : -1)}
            } else {
                return {...state, influencedTasks: [...state.tasks]}
            }
        case 'SET_FILTERED_TASKS':
            return {...state, filteredTasks: [...state.tasks]}
        case 'SET_IS_SORTING':
            if (action.payload) {
                state.isSorting = true
                return {...state, influencedTasks: [...state.filteredTasks].sort((a,b) => a.priority > b.priority ? 1 : -1)}
            } else {
                state.isSorting = false
                return {...state, influencedTasks: [...state.filteredTasks]}
            }
        case 'FILTER_TASKS':
            if (action.payload === 'all') {
                state.filteredTasks = [...state.tasks]
                if (state.isSorting) {
                    return {...state, influencedTasks: [...state.tasks].sort((a,b) => a.priority > b.priority ? 1 : -1)}
                } else {
                    return {...state, influencedTasks: [...state.tasks]}
                }
            } else {
                state.filteredTasks = [...state.tasks].filter(task => task.project === action.payload)
                if (state.isSorting) {
                    return {...state, influencedTasks: [...state.tasks].filter(task => task.project === action.payload).sort((a,b) => a.priority > b.priority ? 1 : -1)}
                } else {
                    return {...state, influencedTasks: [...state.tasks].filter(task => task.project === action.payload)}
                }
            }


        default:
            return state
    }
}