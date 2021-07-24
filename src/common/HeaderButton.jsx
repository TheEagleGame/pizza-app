import {NavLink} from "react-router-dom";
import {ReactComponent as Truck} from "./../assets/truck_icon.svg";
import './../styles/header_button.scss';
import {connect} from "react-redux";


const HeaderButton = ({basket}) => {
    console.log(basket)
    return (
        <div className='header_button'>
            <NavLink to='/order'>
                <div className='header_button_container'>
                    <section className='price_of_order'>
                        <span>{basket.price}</span>
                        <span>P</span>
                    </section>
                    <div className='header_button_delimiter'></div>
                    <section className='order_count'>
                        <Truck className='truck_icon' fill="white"/>
                        <span>{basket.count}</span>
                    </section>
                </div>
            </NavLink>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        basket: state.order.basket
    }
}

export default connect(mapStateToProps, null)(HeaderButton)