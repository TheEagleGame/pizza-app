import React, {useEffect, useState} from "react";
import {ReactComponent as Plus} from "../../../assets/plus.svg";
import {ReactComponent as Minus} from "../../../assets/minus.svg";
import '../../../styles/order_card.scss'


export const OrderCard = (props) => {

    const {id, crust, size, count, pizza, changePizzaCount, changeBasketInfo, deletePizza} = props
    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        const indexOfPizza = pizza.findIndex(item => item.id === id)
        setTitle(pizza[indexOfPizza].title)
        setImgUrl(pizza[indexOfPizza].imgUrl)
        setPrice(pizza[indexOfPizza].price)
    }, [])

    const incrementCount = () => {
        changePizzaCount(id, size, crust, Number(count) + Number(1))
        changeBasketInfo(Number(1), price)
    }

    const decrementCount = () => {
        if (count > 1) {
            changePizzaCount(id, size, crust, Number(count) - Number(1))
            changeBasketInfo(Number(-1), Number(price))
        }
    }

    const deleteOrder = () => {
        deletePizza(id)
        changeBasketInfo(Number(-count), Number(price))
    }
    return (
        <section className='order-card'>
            <div className='pizza-info'>
                <img src={imgUrl} alt='pizza_img'/>
                <div className='pizza-description'>
                    <h2 className='pizza-description_name'>{title}</h2>
                    <p className='pizza-description__type'>{`${crust}, ${size} см`}</p>
                </div>
            </div>
            <div className='order-info'>
                <div className='pizza-count'>
                    <div className='pizza-count__changer' onClick={incrementCount} >
                        <Plus fill="#fe5f1e"/>
                    </div>
                    <div>{count}</div>
                    <div className='pizza-count__changer' onClick={decrementCount}>
                        <Minus fill="#fe5f1e"/>
                    </div>
                </div>
                <div className='order-info__price'>
                    {`${Number(price) * Number(count)} Р`}
                </div >
                <div className='order-info__remove-icon' onClick={deleteOrder}>
                    &times;
                </div>
            </div>
        </section>)
}