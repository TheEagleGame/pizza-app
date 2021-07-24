import {combineReducers} from "redux";
import {itemReducer} from "./item/itemReducer";
import {orderReducer} from "./order/orderReducer";


export const rootReducer = combineReducers({
    item: itemReducer,
    order: orderReducer
})