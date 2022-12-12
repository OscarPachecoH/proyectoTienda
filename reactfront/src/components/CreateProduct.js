import axios from 'axios' //importacion de cliente HTTP
import React, {useState} from 'react' //importacion de ganchos de react
import { useNavigate } from 'react-router-dom' //impotacion para relaciones entre recursos

const endpoint = 'http://localhost:8000/api/product' //especificacion de ruta para peticiones de datos en laravel

const CreateProduct = () => { //componente principal

    //creacion de variables de estado
    const [name, setName] = useState('')            //hud para nombre inicializado
    const [category, setCategory] = useState('')    //hud para categoria inicializado
    const [price, setPrice] = useState()            //hud para precio inicializado
    const [imagen, setImg] = useState('')           //hud para imagen inicializado
    const navigate = useNavigate()

    const store = async (e) => {    //funcion que ingresa los valores a la base de datos
        e.preventDefault()          //prevencion de autorecarca en la pagina
        await axios.post(endpoint, {nombre:name, categoria: category, precio: price, imagen: imagen}) //envio de datos a registrar
        navigate('/') //regreso a la pagina principal
    }
    
  return (
    <div>
        <center>
            <form onSubmit={store}>
                <table className='bg-info' width='400'>
                    <thead>
                        <td colspan='2' align='center'>
                            <h3>Crear Producto</h3>
                        </td>
                    </thead>
                    <tr>
                        <td align='right'>Nombre:</td>
                        <td>
                            <input 
                                value={name} 
                                onChange={ (e)=> setName(e.target.value)/*se almacenan los datos */} 
                                type='text' 
                                className='form-control' required/>
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>Categoria:</td>
                        <td>
                            <select value={category} onChange={(e)=> setCategory(e.target.value) /*se almacenan los datos */} className='form-control'>
                                <option value=''>--Seleciona--</option>
                                <option value='Mujer'>Mujer</option>
                                <option value='Hombre'>Hombre</option>
                                <option value='Ninos'>Niños</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>Precio: $</td>
                        <td>
                            <input 
                                value={price}
                                onChange={ (e)=> setPrice(e.target.value)/*se almacenan los datos */}
                                type='number'
                                className='form-control'
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align='right'>Imagen:</td>
                        <td>
                            <input 
                                value={imagen}
                                onChange={ (e)=> setImg(e.target.value)/*se almacenan los datos */}
                                type='text'
                                className='form-control'
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2' align='center'>
                            <button type='submit' className='btn btn-success'>Guardar</button>
                        </td>
                    </tr>
                </table>
            </form>
        </center>
    </div>
  )
}

export default CreateProduct //nombre de elemento exportado