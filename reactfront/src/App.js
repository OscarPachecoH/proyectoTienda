import { BrowserRouter, Routes, Route } from 'react-router-dom'; //importacion de rutas
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Login from './pages/Login';

//funcion principal
function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
