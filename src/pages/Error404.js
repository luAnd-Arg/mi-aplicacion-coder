import { Link } from "react-router-dom";

const Error404 = () => {
    return( <div>
            <h1>Error</h1>
            <p>Lo sentimos No pudimos encontrar tu pagina ,  <Link to="/" element="home"> vuelve al inicio </Link> </p>
    </div>
     )
}
export default Error404;
