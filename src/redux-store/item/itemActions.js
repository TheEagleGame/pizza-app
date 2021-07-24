export const FETCH_PIZZA_REQUEST = 'FETCH_PIZZA_REQUEST'
export const FETCH_PIZZA_SUCCESS = 'FETCH_PIZZA_SUCCESS'
export const FETCH_PIZZA_FAILURE = 'FETCH_PIZZA_FAILURE'
/*export const SORT_ITEM_BY_ALPHABET = 'SORT_ITEM_ALPHABET'
export const SORT_ITEM_BY_PRICE = 'SORT_ITEM_PRICE'
export const SORT_ITEM_REVERSE = 'SORT_ITEM_REVERSE'*/
export const SET_SORTING = 'SET_SORTING'

export const setSorting = (typeOfSort) => {
    return {
        type: SET_SORTING,
        typeOfSort
    }
}

export const fetchPizzaRequestAC = () => {
    return {
        type: FETCH_PIZZA_REQUEST
    }
}

export const fetchPizzaSuccessAC = (payload) => ({
    type: FETCH_PIZZA_SUCCESS,
    payload
})

export const fetchPizzaFailureAC = (error) => ({
    type: FETCH_PIZZA_FAILURE,
    error
})

/*export const sortAlphabetAC = () => ({
    type: SORT_ITEM_BY_ALPHABET
})

export const sortPriceAC = () => ({
    type: SORT_ITEM_BY_PRICE
})

export const sortReverseAC = () => ({
    type: SORT_ITEM_REVERSE
})*/

