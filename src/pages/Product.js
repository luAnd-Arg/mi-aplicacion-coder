import { NavLink } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/products/1">Audi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/2">Mercedes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/3">Bmw</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/4">Honda</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/5">Ford</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
export default Products;