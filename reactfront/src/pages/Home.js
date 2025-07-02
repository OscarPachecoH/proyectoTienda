import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import productService from "../services/productService";
import Carousel from "../components/Carousel";

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
            <Carousel />
            <div className="container my-5">
                {error && <div className="alert alert-danget">{error}</div>}
                {products.length === 0 && !error ? (
                    <div className="alert alert-warning">No hay productos registrados</div>
                ) : (
                    <div className="row">
                        <div id="hombre" className="section-male row">
                            <h1 className="barlow-extralight-italic">Sección para hombres</h1>
                            <hr className="dropdown-divider" />
                            {pMen.map((m) => (
                                <div key={m.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                                    <Card product={m} />
                                </div>
                            ))}
                        </div>
                        <div id="mujer" className="section-female row">
                            <h1 className="barlow-extralight-italic">Sección para mujeres</h1>
                            <hr className="dropdown-divider" />
                            {pWomen.map((w) => (
                                <div key={w.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                                    <Card product={w} />
                                </div>
                            ))}
                        </div>
                        <div id="ninos" className="section-childern row">
                            <h1 className="barlow-extralight-italic">Sección para niños</h1>
                            <hr className="dropdown-divider" />
                            {pChilder.map((c) => (
                                <div key={c.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                                    <Card product={c} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Home;