import CarWidget from "./CarWidget"
const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <img alt='logo' src='../FantasyBakeryLogo.png' className="aLogo"/>
            <a className='aLink'>Home</a>
            <a className='aLink'>Productos</a>
            <a className='aLink'>Ofertas</a>
            <a className='aLink'>Más vendidos</a>
            <CarWidget counter={13}/>
        </nav>
    )
}
export default NavbarComponent