import { NavLink, Outlet } from "react-router-dom";

const Layout = () =>{
    return( 
        <div>
        <nav>
        <ul>
        <li> {/*todo este codigo esta desustructurado*/}
             <NavLink end  to="/" > Inicio </NavLink>
        </li>
        <li>
            <NavLink  to = "nuevos">Nuevos</NavLink>
        </li>
        <li>
            <NavLink  to = "usados">Usados</NavLink>
        </li>
            <li>
             <NavLink  to ="error"></NavLink>
            </li>
            <li>
                <NavLink end to= "products">Productos</NavLink>
            </li>
            <li>
                <NavLink to="products/id"></NavLink>
            </li>
        </ul>
        </nav>  
        <hr/>
        <Outlet />
        </div>
       
       )
}
export default Layout;