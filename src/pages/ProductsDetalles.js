import { useParams } from "react-router-dom";
const ProductosDetalles = () => {
    const parametro = useParams();
    return (
        <h1>Detalles de Los Productos {parametro.id} </h1>
    )
}
export default ProductosDetalles;