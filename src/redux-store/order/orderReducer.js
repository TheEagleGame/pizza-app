import {
    ADD_TO_ORDER,
    CHANGE_BASKET_INFO,
    CHANGE_ITEMS_COUNT,
    CLEAR_ORDER_BASKET,
    DELETE_PIZZA_FROM_ORDER_BASKET
} from "./orderActions";

const initialState = {
    basket: {
        price: 0,
        count: 0,
        order: []
    }
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_ORDER:
            const indexOfPizza = state.basket.order.findIndex(
                item => JSON.stringify(item, ['id', 'crust', 'size', 'price']) === JSON.stringify(action.payload, ['id', 'crust', 'size', 'price']))
            if (indexOfPizza === -1) {
                return {
                    ...state,
                    basket: {
                        ...state.basket,
                        order: [...state.basket.order, action.payload]
                    }
                }
            } else {
                let orderCopy = state.basket.order.map(item => Object.assign({}, item));
                orderCopy[indexOfPizza].count = Number(state.basket.order[indexOfPizza].count) + Number(1)
                return {
                    ...state,
                    basket: {
                        ...state.basket,
                        order: orderCopy
                    }
                }
            }

        case CHANGE_ITEMS_COUNT:
            const index = state.basket.order.findIndex(
                item => JSON.stringify(item, ['id', 'crust', 'size']) === JSON.stringify(action.payload, ['id', 'crust', 'size']))
            let orderCopy = state.basket.order.map(item => Object.assign({}, item));
            orderCopy[index].count = action.payload.count
            return {
                ...state,
                basket: {
                    ...state.basket,
                    order: orderCopy
                }
            }

        case DELETE_PIZZA_FROM_ORDER_BASKET:

            let changedOrder = state.basket.order.map(item => Object.assign({}, item))
            const indexOfDeletedPizza = changedOrder.findIndex(item => item.id === action.payload.id)
            changedOrder.splice(indexOfDeletedPizza, 1)
            return {
                ...state,
                basket: {
                    ...state.basket,
                    order: changedOrder
                }
            }

        case CHANGE_BASKET_INFO:
            let summaryOrderPrice = state.basket.price
            let summaryOrderCount = state.basket.count
            summaryOrderPrice = Number(summaryOrderPrice) + Number(Number(action.payload.price) * Number(action.payload.count))
            summaryOrderCount = Number(summaryOrderCount) + Number(action.payload.count)
            return {
                ...state,
                basket: {
                    ...state.basket,
                    price: summaryOrderPrice,
                    count: summaryOrderCount,
                }
            }
        case CLEAR_ORDER_BASKET:
            return {
                ...state,
                basket: {
                    price: 0,
                    count: 0,
                    order: []
                }
            }

        default:
            return state
    }
}