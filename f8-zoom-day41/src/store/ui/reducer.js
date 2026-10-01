import { HIDE_LOADING, SHOW_LOADING } from "./constants";

const initialState = {
    isLoading: false,
};

function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}

export default uiReducer;
