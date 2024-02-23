import React, { useState } from 'react'
import { Card } from '../CartWidget/Card';
import  Logo  from '../../assets/logo.png';

export const Navbar = () => {
    const [showcategori, setShowCategori] = useState(false)



    return (
        <>
              <nav className='bg-teal-500 py-4'>
            <div className='container mx-auto flex flex-row justify-between items-center min-w-11'>
                <div className='mr-20 w-[5.2%] '>
                    <img src={Logo} alt="Logo" className='w-[100%] ml-4' />
                </div>
                <div className='flex items-center justify-center flex-grow'>
                    <img src="" alt="" />
                    <form action="" className='bg-white p-2 h-[20%] w-[90%]'>
                        <input type="text" name="" id="" className='w-[100%] h-8 rounded-lg focus:border-indigo-500  outline-none' />
                    </form>
                </div>
                <div className=''>
                    <ul className=''>
                        <button onClick={() => setShowCategori(!showcategori)} className='text-lg'>Categorias</button>
                        {showcategori && (
                            <ul className='absolute  bg-teal-800 text-white w-[7%] flex flex-col items-start outline-none transition-all'>
                                <li className=''>
                                    <button className='hover:underline w-full text-lg hover:animate-pulse text-white'>Categoria</button>
                                </li>
                                <li className=''>
                                    <button className='hover:underline text-lg hover:animate-pulse text-white'>Categoria</button>
                                </li>
                                <li className=''>
                                    <button className='hover:underline text-lg hover:animate-pulse text-white'>Categoria</button>
                                </li>
                            </ul>
                        )}
                    </ul>
                </div>
                <div className='mx-5'>
                    <ul className='flex'>
                        <li className='p-2 mr-2 '>
                            <a href="" className='text-lg'>Productos</a>
                        </li>
                        <li className='p-2 mr-2 '>
                            <a href="" className='text-lg'>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className='flex  ml-5'>
                    <Card />
                </div>
            </div>
        </nav>

        </>
    )
}
