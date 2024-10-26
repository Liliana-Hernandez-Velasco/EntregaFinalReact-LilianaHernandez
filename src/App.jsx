import './custom.css';
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
   <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenidos a Fantasy Bakery' texto='More coming soon...'/>
   </div>
  )
}

export default App