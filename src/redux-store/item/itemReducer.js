import {
    FETCH_PIZZA_FAILURE,
    FETCH_PIZZA_REQUEST,
    FETCH_PIZZA_SUCCESS, SET_SORTING,
} from "./itemActions"

const initialState = {
    pizza: [],
    loading: false,
    sorting: 'a-z',
    error: ''
}
export const itemReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PIZZA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PIZZA_SUCCESS:
            return {
                ...state,
                pizza: action.payload,
                loading: false
            }
        case FETCH_PIZZA_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case SET_SORTING:
            return {
                ...state,
                sorting: action.typeOfSort
            }
        default:
            return state
    }
}
