import React, {useState, useEffect} from 'react' //importacion de ganchos de react
import axios from 'axios' //importacion de cliente HTTP
import { Form, Link } from 'react-router-dom' //impotacion para relaciones entre recursos

const endpoint = 'http://localhost:8000/api' //especificacion de ruta para peticiones de datos en laravel

const ShowProducts = () => { //componente principal

    //creacion de variables de estado
    const [products, setProducts] = useState([]) //hud para productos inicializado
    const [compras, setCompras] = useState([])   //hud para compras inicializado
    
    //accion que se realiza despues de la renderizacion
    useEffect (() => {
        getAllProducts()
        getAllCompras()
    }, [])

    const getAllProducts = async () => { //funcion para obtener todos los productos
        const response = await axios.get(`${endpoint}/products`) //obtiene todos los datos de la tabla productos
        setProducts(response.data) //almacena y envia los datos
    }
    
    const deleteProduct = async (id) =>{ //funcion para eliminar un producto
        await axios.delete(`${endpoint}/product/${id}`) //envio de dato a eliminar
        getAllProducts();//vuelve a mostrar todos los productos
    }

    const getAllCompras = async () => { //funcion para obtener todos las compras
        const response = await axios.get(`${endpoint}/compra`) //obtiene todos los datos de la tabla compras
        setCompras(response.data) //almacena y envia los datos
    }

    const deleteCompra = async (id) =>{
        await axios.delete(`${endpoint}/product/${id}/compra`)
        getAllCompras();
    }

    /*funcion que borra los elementos de la base de datos
    const borrarDatos = async () =>{
        const response = await axios.post(`${endpoint}/product/realizarcompra`)
        getAllCompras(response.data);
    }*/

    //funcion para generar una suma de las compras hechas
    function total(){
        var t = 0;
        compras.map(function (x){
            t += x.precio;
        })
        return t;
    }

    //funcion general que muestra toda la pagina y un filtro
    function filtro(){
        const mujer = products.filter(product => product.categoria.includes("Mujer"))   //variable que almacena lo datos de solo de "mujeres"
        const hombre = products.filter(product => product.categoria.includes("Hombre")) //variable que almacena lo datos de solo de "hombres"
        const nino = products.filter(product => product.categoria.includes("Nino"))     //variable que almacena lo datos de solo de "niños"

        return(
            <div className="body">
                <div className='d-grip gap-2 title'>
                    <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Crear Producto</Link>
                </div>
                <hr/>
                <h3>Objetos para mujeres</h3>
                <div className='container-card'>
                    { mujer.map((m) => ( //recupera todos los datos almacenados en la variable y los muestra
                            <div key={m.id}>
                                <div className="card">
                                    <img src={m.imagen} height='100' width='100' value={m.imagen}/>
                                    <div>
                                        <h2>{m.nombre}</h2>
                                        <h5>Precio: {m.precio}</h5>
                                        <h5>Categoria: {m.categoria}</h5>
                                    </div>
                                    <div>
                                        {
                                        /*generamos con una etiqueta Link el boton editar en donde se escribe la ruta y el id
                                          que sera modificado y despues se genera un boton el cual tiene una funcion que llama 
                                          a la funcion deleteProduct el cual pasa el id para que este sea borrado.*/
                                        }
                                        <Link to={`/edit/${m.id}`} className='btn btn-warning'>Editar</Link>
                                        <button onClick={() => deleteProduct(m.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                    <div>
                                        {/*boton que pasa los datos a la tabla de compras*/}
                                        <Link to={`/comp/${m.id}`} className='btn btn-info'>Comprar</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <hr/>
                <h3>Objetos para hombres</h3>
                <div className='container-card'>
                    { hombre.map((h) => (
                        <div key={h.id}>
                            <div className="card">
                                <img src={h.imagen} height='100' width='100'/>
                                <div>
                                    <h2>{h.nombre}</h2>
                                    <h5>Precio: {h.precio}</h5>
                                    <h5>Categoria: {h.categoria}</h5>
                                </div>
                                <div>
                                    <Link to={`/edit/${h.id}`} className='btn btn-warning'>Editar</Link>
                                    <button onClick={() => deleteProduct(h.id)} className="btn btn-danger">Eliminar</button>
                                </div>
                                <div>
                                    <Link to={`/comp/${h.id}`} className='btn btn-info'>Comprar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr/>
                <h3>Objetos para niños</h3>
                <div className='container-card'>
                    { nino.map((n) => (
                        <div key={n.id}>
                            <div className="card">
                                <img src={n.imagen} height='100' width='100'/>
                                <div>
                                    <h2>{n.nombre}</h2>
                                    <h5>Precio: {n.precio}</h5>
                                    <h5>Categoria: {n.categoria}</h5>
                                </div>
                                <div>
                                    <Link to={`/edit/${n.id}`} className='btn btn-warning'>Editar</Link>
                                    <button onClick={() => deleteProduct(n.id)} className="btn btn-danger">Eliminar</button>
                                </div>
                                <div>
                                    <Link to={`/comp/${n.id}`} className='btn btn-info'>Comprar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr/>
                {/*generacion de tabla de carrito de compras */}
                <h3>Carrito de compras</h3>
                <center>
                    <table className='table-carrito' width='1000'>
                        <tr className='tabla-encabezado'>
                            <td align='center'><h4>Imagen</h4></td>
                            <td align='center'><h4>Nombre</h4></td>
                            <td align='center'><h4>Categoria</h4></td>
                            <td align='center'><h4>Precio</h4></td>
                            <td align='center'><h4>Opciones</h4></td>
                        </tr>
                        {compras.map((compra) => ( //se obtienen los datos y se muestran
                            <tr key={compra.id} className='tabla-cuerpo'>
                                <td align='center'>
                                    <img src={compra.imagen} height='100' width='100'/>
                                </td>
                                <td align='center'>
                                    {compra.nombre}
                                </td>
                                <td align='center'>
                                    {compra.categoria}
                                </td>
                                <td align='center'>
                                    $ {compra.precio}
                                </td>
                                <td align='center'>
                                    <button onClick={() => deleteCompra(compra.id)} className="btn btn-danger">Quitar</button>
                                </td>
                            </tr>  
                        ))}
                        <tr className='tabla-pie'>
                            <td colSpan={4}></td>
                            <td align='center'>
                                <h4>Total: $ {total() /*se muestra la suma del total de los datos del carrito*/}</h4>                               
                            </td>
                        </tr>
                        <tr className='tabla-pie'>
                            <td align='center' colSpan={4}>
                                {/*muesta un boton para borrar los datos
                                <button onClick={() => borrarDatos()} className="btn btn-danger">Quitar</button>*/}
                            </td>
                        </tr>
                    </table>
                </center><br/>
            </div>
        )
    }
    return filtro();
}

export default ShowProducts //nombre de elemento exportado