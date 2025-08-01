import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CarWidget from './CarWidget';
import { CartContext } from '../components/CartContext';

const NavbarComponent = () => {
  const { cart } = useContext(CartContext); 

  return (
    <nav className="navContainer">
      {}
      <Link to="/">
        <img alt="logo" src="/FantasyBakeryLogo.png" className="aLogo" />
      </Link>

      {}
      <Link className="anchor-nav" to="/categoria/Top10">Top 10</Link>
      <Link className="anchor-nav" to="/categoria/Productos">Productos</Link>
      <Link className="anchor-nav" to="/categoria/Ofertas">Ofertas</Link>

      {}
      <Link to="/cart">
        <CarWidget counter={cart.length} />
      </Link>
    </nav>
  );
};

export default NavbarComponent;


