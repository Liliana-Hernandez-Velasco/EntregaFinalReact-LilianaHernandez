import CarWidget from "./CarWidget"
const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <img alt='logo' src='../FantasyBakeryLogo.png' className="aLogo"/>
            <a className="anchor-nav" href="">Home</a>  
            <a className="anchor-nav" href="">Productos</a> 
            <a className="anchor-nav" href="">Ofertas</a>       
            <CarWidget counter={13}/>
        </nav>
    )
}
export default NavbarComponent