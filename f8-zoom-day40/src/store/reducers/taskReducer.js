const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload,
                loading: false,
                error: null,
            };

        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                error: null,
            };

        case "UPDATE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task,
                ),
                error: null,
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
                error: null,
            };

        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };

        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}

export default taskReducer;
