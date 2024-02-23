import React, { useState } from 'react'
import { Card } from '../CartWidget/Card';
import {logo} from '../../assets/img/logo/logo.png'

export const Navbar = () => {
    const [showCategoria, setCategoria] = useState(false)

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
                                <button onClick={() => setCategoria(!showCategoria)}>Categorias</button>
                                {showCategoria && (
                                <ul>
                                    <li>Categoria 1</li>
                                    <li>Categoria 1</li>
                                    <li>Categoria 1</li>
                                </ul>)}
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
