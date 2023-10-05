import React, { useState, useEffect } from 'react';

const BotonCarrito = ({stock, inicio, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicio);

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

        useEffect ( () => {
            document.querySelector('.cantidad').textContent = cantidad; // Actualiza el DOM
        }, [cantidad]);
    return (
        <div className='coounter'>
            <div className='controls'>
                <button className='boton' onClick={decrementar}> - </button>
                <h4 className='cantidad'> {cantidad} </h4>
                <button className='boton' onClick={incrementar}> + </button>
            </div>
            <div>
                <button className='boton' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    añadir al carro
                </button>
            </div>
        </div>
    )
}

export default BotonCarrito;
