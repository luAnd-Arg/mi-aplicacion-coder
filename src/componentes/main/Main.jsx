import React, { useState } from "react";

const Main = () => {
    const [product, setProduct] = useState([
        {
            titulo: "titulo",
            descripcion: "descripcion",
            precio: "precio"
        }
    ]
    )
    const subirProducto = () => {
        setProduct([{
            titulo : "titulo2",
            descripcion : "descripcion2",
            precio : "precio2"
          }])
              
          
    }
    const quitarProducto = () => {
        setProduct([{
            titulo : "",
            descripcion : "",
            precio : "",
        }]);
    }
        

    return (
        <div className="main">
            <article>
                <h4>Categorias</h4>
            </article>
            <div className="tarjetasDeImagenes">
                <div>
                    <h5>{product[0].titulo}</h5>
                    <p>{product[0].descripcion}</p>
                    <p>{product[0].precio}</p>
                </div>
            </div>
<button className="primary" onClick={quitarProducto}>quitar producto</button>            
<button onClick={subirProducto}>subir producto</button>
        </div>
    );
};

export default Main;
