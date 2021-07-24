export const CHANGE_ITEMS_COUNT = 'CHANGE_PIZZA_COUNT'
export const CHANGE_BASKET_INFO = 'CHANGE_BASKET_INFO'
export const DELETE_PIZZA_FROM_ORDER_BASKET = 'DELETE_PIZZA_FROM_ORDER_BASKET'
export const CLEAR_ORDER_BASKET = 'CLEAR_ORDER_BASKET'
export const ADD_TO_ORDER = 'ADD_TO_ORDER'

export const addToOrderAC = (id, crust, size, price) => ({
    type: ADD_TO_ORDER,
    payload: {
        id,
        crust,
        size,
        price,
        count: '1'
    }
})

export const changeItemsCountAC = (id, size, crust, count) => ({
    type: CHANGE_ITEMS_COUNT,
    payload: {
        id,
        size,
        crust,
        count
    }
})

export const changeBasketInfoAC = (count, price) => ({
    type: CHANGE_BASKET_INFO,
    payload: {
        count,
        price
    }
})

export const deletePizzaAC = (id) => ({
    type: DELETE_PIZZA_FROM_ORDER_BASKET,
    payload: {
        id
    }
})

export const clearOrderAC = () => ({
    type: CLEAR_ORDER_BASKET
})
