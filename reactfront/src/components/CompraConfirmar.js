import axios from "axios"; //importacion de cliente HTTP
import React, {useState, useEffect} from "react";//importacion de ganchos de react
import { useNavigate, useParams } from "react-router-dom"; //importacion de rutas

const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => { //componente princiopal

    const [name, setName] = useState('')            //hud para nombre inicializado
    const [category, setCategory] = useState('')    //hud para categoria inicializado
    const [price, setPrice] = useState(0)           //hud para precio inicializado
    const [imagen, setImg] = useState('')           //hud para imagen inicializado
    const navigate = useNavigate()

    const {id} = useParams()

    //funcion de actualizacion
    const compra = async (e) => {
        e.preventDefault() //prevencion de autorecarca en la pagina
        await axios.post(`${endpoint}${id}/compra`, {nombre:name, categoria: category, precio: price, imagen: imagen}) //envio de datos a ingresar
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)    //se obtienen el dato
            setName(response.data.nombre)                           //se mandan el dato nombre a la variable nombre
            setCategory(response.data.categoria)                    //se mandan el dato nombre a la variable categoria
            setPrice(response.data.precio)                          //se mandan el dato nombre a la variable precio
            setImg(response.data.imagen)                            //se mandan el dato nombre a la variable imegen
        }
        getProductById()
    }, [] )

    return (
        <div>
        <h3>Confirmar compra</h3>
        <form onSubmit={compra}>
            <div className='mb-3'>
                <label className='form-label'>Nombre: {name}</label>
                <input 
                    value={name}
                    onChange={ (e)=> setName(e.target.value)/*se almacenan los datos */}
                    type='text'
                    readOnly
                    className='form-control'
                    hidden
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Categoria: {category}</label>
                <input 
                    value={category}
                    onChange={ (e)=> setCategory(e.target.value)/*se almacenan los datos */}
                    type='text'
                    readOnly
                    className='form-control'
                    hidden
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price: {price}</label>
                <input 
                    value={price}
                    onChange={ (e)=> setPrice(e.target.value)/*se almacenan los datos */}
                    type='number'
                    className='form-control'
                    readOnly
                    hidden
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Imagen</label><br/>
                <img src={imagen} width="150" height="150"/>
                <input 
                    value={imagen}
                    onChange={ (e)=> setImg(e.target.value)/*se almacenan los datos */}
                    type='text'
                    className='form-control'
                    readOnly
                    hidden
                />
            </div>
            <button type='submit' className='btn btn-primary'>Confirmar</button>{/*boton que confirma el guardado de datos */}
        </form>
    </div>
    )
}

export default EditProduct