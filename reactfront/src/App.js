//importacion de hoja de estilo
import './App.css';

//importacion de rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//importaciones de componentes
import ShowProducts from './components/ShowProducts'
import CreateProducts from './components/CreateProduct'
import EditProducts from './components/EditProduct'
import CompraConfirmar from './components/CompraConfirmar'

//funcion principal
function App() {
  return (
    <main className="App">
      <div>{/*Carga de rutas */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowProducts/>}/>
            <Route path='/create' element={<CreateProducts/>}/>
            <Route path='/edit/:id' element={<EditProducts/>}/>
            <Route path='/comp/:id' element={<CompraConfirmar/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
