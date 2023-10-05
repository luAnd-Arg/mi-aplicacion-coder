import BotonCarrito from '../BotonCarrito';
import React from 'react';
import Item from '../Item/Item';
import imagen1  from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/toyota-Hilux.jpg" ;
import imagen2 from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/Fiat-Punto.jpg"
import imagen3 from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/Nissan-Frontier.jpg";
import imagen4 from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/Suzuki-Fun.jpg";
import imagen5 from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/Peugeot.jpg";
import imagen6 from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/BMW-Serie2.jpg";
const Main = () => {
  return (
    <div>
      <div className="contenedor__general">
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Toyota Hilux" descripcion="Color Blanca , traccion 4x4 , modelo 2010 , full tope de gama." precio="5.000.000" imagen={imagen1} imgClassName="img__cards" />
        <div>
        <BotonCarrito inicio={(1)} stock={(10)} onAdd={(cantidad) => console.log ("cantidad agregada " + cantidad)}   />
      </div>
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Fiat Punto" descripcion="Color Bordo , modelo 2012 , media gama , 100.000km" precio="2.000.000" imagen={imagen2} imgClassName="img__cards"/>
        <div>
        <BotonCarrito inicio={(1)} stock={(10)} onAdd={(cantidad) => console.log ("cantidad agregada " + cantidad)}   />
      </div>
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Nissan Frontier" descripcion="Camioneta 4x4 , full, modelo 2020 , 20.000km" precio="14.000.000" imagen={imagen3} imgClassName="img__cards" />
        <div>
        <BotonCarrito inicio={(1)} stock={(10)} onAdd={(cantidad) => console.log ("cantidad agregada " + cantidad)}   />
      </div>
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Suzuki Fun" descripcion="Auto , modelo 2018 , base , 40.000km " precio="6.000.000" imagen={imagen4} imgClassName="img__cards" />
        <div>
        <BotonCarrito inicio={(1)} stock={(10)} onAdd={(cantidad) => console.log ("cantidad agregada " + cantidad)}   />
      </div>
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Peugeot" descripcion="Auto , modelo 2014 , media gama , 20.000 km" precio="5.000.000" imagen={imagen5} imgClassName="img__cards" />
        <div>
        <BotonCarrito inicio={(1)} stock={(10)} onAdd={(cantidad) => console.log ("cantidad agregada " + cantidad)}   />
      </div>
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="BMW" descripcion="Auto de Alta gama , full full Nuevo" precio="30.000.000" imagen={imagen6} imgClassName="img__cards" />
        <div>
        <BotonCarrito inicio={(1)} stock={(10)} onAdd={(cantidad) => console.log ("cantidad agregada " + cantidad)}   />
      </div>
      </div>
    </div>
  );
  }
  export default Main;

