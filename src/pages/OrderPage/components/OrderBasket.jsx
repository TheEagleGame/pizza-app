import React from "react";
import {ReactComponent as Truck} from "../../../assets/truck_icon.svg"
import {ReactComponent as Trash} from '../../../assets/trash_icon.svg'
import '../../../styles/order_basket.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {OrderCard} from "./OrderCard";
import {bindActionCreators} from "redux";
import {
    changeBasketInfoAC,
    changeItemsCountAC,
    clearOrderAC,
    deletePizzaAC
} from "../../../redux-store/order/orderActions";



const OrderBasket = (props) => {
    const {basket, pizza, changePizzaCount, changeBasketInfo, deletePizza, clearOrder} = props
    return (
        <section className='order-basket'>
            <div className='basket-header'>
                <div className='basket-header__title'>
                    <Truck className='truck_icon' fill="black" stroke="none"/>
                    <h1>Корзина</h1>
                </div>
                <div className='basket-header__clear' onClick={() => {
                    clearOrder()
                }}>
                    <Trash className='trash_icon' fill="gray"/>
                    <p>Очистить корзину</p>
                </div>
            </div>
            {basket.order.map(item => {
                return (
                    <OrderCard key={item.id}
                               id={item.id}
                               crust={item.crust}
                               size={item.size}
                               count={item.count}
                               pizza={pizza}
                               changePizzaCount={changePizzaCount}
                               changeBasketInfo={changeBasketInfo}
                               deletePizza={deletePizza}
                    />
                )
            })}
            <section className='basket-info'>
                <div> Всего пицц: <span>{`${basket.count} шт`}</span>  </div>
                <div> Сумма заказа: <span>{`${basket.price} руб.`}</span></div>
            </section>
            <section className='buttons'>
                <NavLink to='/'>
                    <button className='button_router'> &#8249; Вернуться назад</button>
                </NavLink>
                <div>
                    <button className='button_payment'>Оплатить сейчас</button>
                </div>
            </section>
        </section>
    )
}

const mapStateToProps = state => ({
    basket: state.order.basket,
    pizza: state.item.pizza
})

const mapDispatchToProps = (dispatch) => ({
    changePizzaCount: bindActionCreators(changeItemsCountAC, dispatch),
    changeBasketInfo: bindActionCreators(changeBasketInfoAC, dispatch),
    deletePizza: bindActionCreators(deletePizzaAC, dispatch),
    clearOrder: bindActionCreators(clearOrderAC, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBasket)