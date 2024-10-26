import CarWidget from "./CarWidget"
const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <a className='aLink'>Fantasy Bakery</a>
            <a className='aLink'>Nuevos Ingresos</a>
            <a className='aLink'>Ofertas</a>
            <a className='aLink'>Más vendidos</a>
            <CarWidget counter={15}/>
        </nav>
    )
}
export default NavbarComponent