import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import productService from "../services/productService";

function Home() {

    const [ products, setProducts ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await productService.getAllProducts()
            if (response.ok) {
                setProducts(response.data)
            } else {
                setError(response.message)
            }
        };
        fetchProducts()
    }, [])

    const pWomen = products.filter(product => product.category.includes("Mujer") || false);
    const pMen = products.filter(product => product.category.includes("Hombre") || false);
    const pChilder = products.filter(product => product.category.includes("Nino") || false);

    return (
        <>
            <Navbar />
            <div className="container my-5">
                {error && <div className="alert alert-danget">{error}</div>}
                {products.length === 0 && !error ? (
                    <div className="alert alert-warning">No hay productos registrados</div>
                ) : (
                    <div className="row">
                        <div className="section-male row">
                            <h1>Sección para hombres</h1>
                            <hr className="dropdown-divider" />
                            {pMen.map((m) => (
                                <div key={m.id} className="col-md-3 mb-3" >
                                    <Card product={m} />
                                </div>
                            ))}
                        </div>
                        <div className="section-female row">
                            <h1>Sección para mujeres</h1>
                            <hr className="dropdown-divider" />
                            {pWomen.map((w) => (
                                <div key={w.id} className="col-md-4 mb-4" >
                                    <Card product={w} />
                                </div>
                            ))}
                        </div>
                        <div className="section-childern row">
                            <h1>Sección para niños</h1>
                            <hr className="dropdown-divider" />
                            {pChilder.map((c) => (
                                <div key={c.id} className="col-md-4 mb-4" >
                                    <Card product={c} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;