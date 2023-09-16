import Item from '../Item/Item';
import imagen1  from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/hombre-borcegos-01.jpg" ;
import imagen2 from "/programacion/nuevoProyecto/mi-aplicacion-coder/src/imgGenerales/hombre-borcegos-05.jpg";

const Main = () => {

  return (
    <div>
      <div className="contenedor__general">
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Zapatos Deportivos" descripcion="Un par de zapatos para correr" precio="50" imagen={imagen1} imgClassName="img__cards" />
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Zapatillas" descripcion="Nuevas" precio="100" imagen={imagen2} imgClassName="img__cards" />
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Borcegos" descripcion="Esta es una descripcion del calzado" precio="20220" imagen={imagen1} imgClassName="img__cards" />
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Zapatos Deportivos" descripcion="Un par de zapatos para correr" precio="50" imagen={imagen1} imgClassName="img__cards" />
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Zapatillas" descripcion="Nuevas" precio="100" imagen={imagen2} imgClassName="img__cards" />
        <Item claseDelaSeccion="div__cards" claseDelDiv="div__card" title="Borcegos" descripcion="Esta es una descripcion del calzado" precio="20220" imagen={imagen1} imgClassName="img__cards" />
      </div>
    </div>
  );
  }
  export default Main;






// const Main = () => {
//     const [product, setProduct] = useState([
//         {
//             titulo: "titulo",
//             descripcion: "descripcion",
//             precio: "precio"
//         }
//     ]
//     )
//     const subirProducto = () => {
//         setProduct([{
//             titulo : "titulo2",
//             descripcion : "descripcion2",
//             precio : "precio2"
//           }])
              
          
//     }
//     const quitarProducto = () => {
//         setProduct([{
//             titulo : "",
//             descripcion : "",
//             precio : "",
//         }]);
//     }
            

//     return (
//         <div className="main">
//             <article>
//                 <h4>Categorias</h4>
//             </article>
//             <div className="tarjetasDeImagenes">
//                 <div>
//                     <h5>{product[0].titulo}</h5>
//                     <p>{product[0].descripcion}</p>
//                     <p>{product[0].precio}</p>
//                 </div>
//             </div>
// <button className="primary" onClick={quitarProducto}>quitar producto</button>            
// <button onClick={subirProducto}>subir producto</button>
//         </div>
//     );
// };

