import './custom.css';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Cart from './components/Cart';
import NotFound from './components/NotFound';
function App() {
  return (
       <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Fantasy Bakery" texto="¡Delicias para ti!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Categoría" texto="Explora nuestros productos" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}
export default App

