import React from "react";
import './../styles/header.scss'

import HeaderButton from "./HeaderButton";
import Logo from "../assets/logo.svg";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <div className='header__logo'>
                    <img src={Logo} alt='header_logo'/>
                    <div className='header__title'>
                        <h2>React Pizza</h2>
                        <p>новый пет-проект</p>
                    </div>
                </div>
            </NavLink>
           <HeaderButton/>
        </header>
    )
}