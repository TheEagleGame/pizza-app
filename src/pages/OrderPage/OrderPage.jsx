import React from "react";
import {connect} from "react-redux";
import {EmptyOrderBasket} from "./components/EmptyOrderBasket";
import OrderBasket from "./components/OrderBasket";



const OrderPage = ({order}) => {
    return (
        <div>
            {
                order.length ? <OrderBasket/> : <EmptyOrderBasket/>
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    order: state.order.basket.order
})

export default connect(mapStateToProps, null)(OrderPage)