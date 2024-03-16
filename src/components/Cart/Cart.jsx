import { useEffect, useState } from 'react';
import "./card.css"

export const Cart = () => {
    const generarNumeroRando = () => {
        return Math.floor(Math.random() * 10) + 1;
    };

    const [numeroRando, setNumeroRando] = useState(() => {
        const storedNumber = parseInt(localStorage.getItem('numeroRando'));
        return isNaN(storedNumber) ? generarNumeroRando() : storedNumber;
    });

    const handleAddToCard = () => {
        const newRandoNumber = generarNumeroRando();
        setNumeroRando(newRandoNumber);
    };

    useEffect(() => {
        localStorage.setItem('numeroRando', numeroRando.toString());
    }, [numeroRando]);

    return (
        <>
            <button onClick={handleAddToCard} id='btn'>
                <i className="bi bi-cart4">
                    {numeroRando > 0 && <span className="badge badge-pill badge-danger">{numeroRando}</span>}
                </i>

            </button>
        </>
    );
};
