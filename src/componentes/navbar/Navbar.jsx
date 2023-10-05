import { Routes, Route } from "react-router-dom";
import Layout from "../../pages/Layout";
import Error404 from "../../pages/Error404";
import Home from "../../pages/Inicio";
import Products from "../../pages/Product";
import ProductsDetalles from "../../pages/ProductsDetalles";
import Usados from "../../pages/Usados";
import Nuevos from "../../pages/Nuevos";
const NavBar = (props) => {
  return (
    <nav className="navBar">
      <h1 className="titulo">{props.title}</h1>
      <h2 className="subTitulo">{props.subtitulo}</h2>
        <Routes className="rutas__navBar">
          <Route path='/' element={<Layout />}>
            <Route path='nuevos' element={<Nuevos />} />
            <Route path='usados' element={<Usados />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductsDetalles />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error404 />} /></Route>
        </Routes>
    </nav>
  )

  // debemos hacer un evento que cuando pase el mouse sobre ofertas , se desplace el li de las ofertaas
}
export default NavBar;