import Cards from "../Cards/Cards";
const NavBar = (props) => {
    return (
      <nav className="navBar">
      <h1>{props.title}</h1>
      <div className="btn__navBar">
        <button className="btns__navBar">Mujeres</button>
        <button className="btns__navBar">Hombres</button>
        <button className="btns__navBar">Niños</button>
        <button className="btns__navBar">Saber más</button>
      <Cards/>
      </div>
      <h2>{props.subtitulo}</h2>
  </nav> 
  )

    // debemos hacer un evento que cuando pase el mouse sobre ofertas , se desplace el li de las ofertaas
 }
 export default NavBar;