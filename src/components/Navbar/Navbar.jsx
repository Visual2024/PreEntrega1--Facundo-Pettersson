import React, { useState } from 'react'
import './style.css';
import logo from '../../assets/img/logo/logo.png';
import { Card } from '../CartWidget/Card';

export const Navbar = () => {


    return (
        <>
            <header className='container-header'>
                <div className='container-general'>
                    <div className='container-logo'>
                        <img src={logo} alt="Logo del E-commerce" id='img-logo' />
                    </div>
                    <nav className='navegacion'>
                        <ul className='ul-container'>
                            <li>
                                <a href="">Inicio</a>
                            </li>
                            <li>
                                <a href="">Shop</a>
                            </li>
                            <li>
                                <a href="">Servicios</a>
                            </li>
                            <li id='li-carrito'>
                                <Card className='card' />
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

        </>
    )
}
