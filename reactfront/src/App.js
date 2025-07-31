import { BrowserRouter, Routes, Route } from 'react-router-dom'; //importacion de rutas
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Profile from './pages/Profile';

//funcion principal
function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={
            <ProtectedRoute requiresAuth={false} redirecTo='/'>
              <Login />
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute requiresAuth={true} >
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
