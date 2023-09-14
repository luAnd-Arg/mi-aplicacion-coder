import React, { useState } from "react";
import icono from "../Cards/img/icono.svg";

const Cards = () => {
    const [cantidadProductos, setcantidadProductos] = useState([0]);

    return (
        <div className="cards__Icono">
            Su <img className="img__Icono" src={icono} alt="Icono de Calzados LuAnd" /> contiene{cantidadProductos}  productos
        </div>
    );
};

export default Cards;

