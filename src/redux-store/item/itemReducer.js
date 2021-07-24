import {
    FETCH_PIZZA_FAILURE,
    FETCH_PIZZA_REQUEST,
    FETCH_PIZZA_SUCCESS, SET_SORTING,
    /*SORT_ITEM_BY_ALPHABET,
    SORT_ITEM_BY_PRICE,
    SORT_ITEM_REVERSE,*/
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

        /*case SORT_ITEM_BY_ALPHABET:
            let pizzaSortedByAlphabet = state.pizza.map(item => Object.assign({}, item))
            pizzaSortedByAlphabet.sort(function (a, b) {
                let nameA = a.title
                let nameB = b.title
                if (nameA > nameB) {
                    return 1
                }
                if (nameA < nameB) {
                    return -1
                }
            })
            return {
                ...state,
                pizza: pizzaSortedByAlphabet
            }

        case SORT_ITEM_BY_PRICE:
            let pizzaSortedByPrice = state.pizza.map(item => Object.assign({}, item))
            pizzaSortedByPrice.sort(function (a, b) {
                return a.price - b.price
            })
            return {
                ...state,
                pizza: pizzaSortedByPrice
            }

        case SORT_ITEM_REVERSE:
            debugger
            let pizzaReversed = state.pizza.map(item => Object.assign({}, item))
            pizzaReversed.reverse()
            return {
                ...state,
                pizza: pizzaReversed
            }*/

        default:
            return state
    }
}
