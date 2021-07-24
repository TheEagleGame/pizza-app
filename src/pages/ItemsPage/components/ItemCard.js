import React, {useEffect, useState} from "react";
import '../../../styles/item_card.scss'

export const ItemCard = (props) => {
    const {title, imgUrl, crust, sizes, price, id, order, addNewOrder, changeBasketInfo} = props
    const [orderSize, setOrderSize] = useState(props.sizes[0].size)
    const [orderCrust, setOrderCrust] = useState(props.crust[0].type)
    const [orderCount, setOrderCount] = useState(0)

    useEffect(() => {
        const index = order.findIndex(item => item.id === id && item.size === orderSize && item.crust === orderCrust)
        if (index !== -1) {
            setOrderCount(order[index].count)
        } else {
            setOrderCount(0)
        }

    },)

    const addOrderSize = (size) => {
        setOrderSize(size)
    }

    const addOrderCrust = (crust) => {
        setOrderCrust(crust)
    }

    const addOrder = () => {
        addNewOrder(id, orderCrust, orderSize, price)
        changeBasketInfo(1, price)
    }

    return (
        <div className='pizza-card'>
            <div className='pizza-card__icon'>
                <img src={imgUrl} alt='pizza_icon'/>
            </div>
            <h2 className='pizza-card__title'>{title}</h2>
            <div>
                <div className='pizza-description'>
                    <ul className='pizza-description__crust'>
                        {crust.map( (item,index) => item.available
                            ? <li className={item.type === orderCrust ? 'is_available' : ''}
                                  onClick={() => addOrderCrust(item.type)}
                                  key={index}
                            > {item.type} </li>
                            : <li className='is_not_available'
                                  key={index}
                            > {item.type} </li>
                        )}
                    </ul>
                    <ul className='pizza-description__size'>
                        {sizes.map( (item,index) => item.available
                            ? <li className={item.size === orderSize ? 'is_available' : ''}
                                  onClick={() => addOrderSize(item.size)}
                                  key={index}
                            > {item.size} </li>
                            : <li className='is_not_available'
                                  key={index}
                            > {item.size} </li>
                        )}
                    </ul>
                </div>
                <div className='pizza-footer'>
                    <h1 className='pizza-footer__price'>{`${price} P`}</h1>
                    <div className='add-pizza-button'>
                        <div className='add-pizza-button__text' onClick={addOrder}>+ добавить
                        </div>
                        {
                            orderCount !== 0 &&
                            <div className='add-pizza-button__count'>
                                {orderCount}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}