import React, {useEffect} from "react";
import '../../styles/items_page.scss';
import {ItemCard} from "./components/ItemCard";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ItemPageSorting} from "./components/ItemPageSorting";

import ItemLoader from "./components/ItemLoader";
import {fetchPizza} from "../../redux-store/thunks/fetchItems";
import {addToOrderAC, changeBasketInfoAC} from "../../redux-store/order/orderActions";
import {setSorting} from "../../redux-store/item/itemActions";
import {selectSortedPizza} from "../../selector/selectSortedPizza";

const ItemsPage = (props) => {
    const {
        pizza,
        order,
        sorting,
        addNewOrder,
        changeBasketInfo,
        setSorting,
        fetchPizza,
        isLoading,
    } = props

    useEffect(() => {
        fetchPizza()
    }, [])


    return (
        <div className='pizza-list'>
            <div className='pizza-list__title'>
                <h1>Все пиццы:</h1>
                <div className='pizza-list__sorting'>
                    <ItemPageSorting setSorting={setSorting}
                                     sorting={sorting}
                    />
                </div>
            </div>
            {isLoading
                ? <div className='pizza-list__container'>
                    <ItemLoader/>
                    <ItemLoader/>
                    <ItemLoader/>
                    <ItemLoader/>
                    <ItemLoader/>
                    <ItemLoader/>
                </div>
                : <div className='pizza-list__container'>
                    {pizza.map(item =>

                        <ItemCard title={item.title}
                                  imgUrl={item.imgUrl}
                                  sizes={item.sizes}
                                  crust={item.crust}
                                  price={item.price}
                                  id={item.id}
                                  key={item.id}
                                  order={order}
                                  fetchPizza={fetchPizza}
                                  addNewOrder={addNewOrder}
                                  changeBasketInfo={changeBasketInfo}
                        />
                    )}
                </div>
            }
        </div>
    )
}
const mapStateToProps = state => ({
    pizza: selectSortedPizza(state,state.item.sorting),
    order: state.order.basket.order,
    isLoading: state.item.loading,
    sorting: state.item.sorting,

})

const mapDispatchToProps = dispatch => ({
    fetchPizza: bindActionCreators(fetchPizza, dispatch),
    addNewOrder: bindActionCreators(addToOrderAC, dispatch),
    changeBasketInfo: bindActionCreators(changeBasketInfoAC, dispatch),
    setSorting: bindActionCreators(setSorting, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage)