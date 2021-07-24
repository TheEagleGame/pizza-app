import '../../../styles/empty_order_basket.scss'
import DeliveryIcon from '../../../assets/delivery_icon.svg'
import {NavLink} from "react-router-dom";

export const EmptyOrderBasket = () => {
    return (
        <div className='empty-basket'>
            <h1>Корзина пустая</h1>
            <p>Вероятней всего, вы еще не заказывали пиццу</p>
            <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={DeliveryIcon}
                 className='empty-basket__icon'
                 alt='delivery_icon'
            />
            <div>
                <NavLink to='/'>
                    <button>Вернуться назад</button>
                </NavLink>
            </div>
        </div>
    )
}