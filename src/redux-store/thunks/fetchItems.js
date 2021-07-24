import axios from "axios";
import {
    fetchPizzaFailureAC,
    fetchPizzaRequestAC,
    fetchPizzaSuccessAC,
    } from "../item/itemActions";


export const fetchPizza = () => {
    return dispatch => {
        dispatch(fetchPizzaRequestAC())
        axios.get(process.env.REACT_APP_SERVER_URL).then(response => dispatch(fetchPizzaSuccessAC(response.data)))
            .catch(error => dispatch(fetchPizzaFailureAC(error)))
    }
}