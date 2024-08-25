
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cards.css'; 

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    };
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <p>Loading...</p> 
            </div>
        );
    }
    
    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card text-center">
                            <Link to={`/product/${product.id}`} className="product-link">
                                <img src={product.image} className="card-img-top" alt={product.title} height="255px" />
                                <div className="card-body">
                                    <span className='badge bg-primary'>{product.category}</span>
                                    <h5 className="card-title mt-3">{product.title.substring(0, 22)}</h5>
                                    <p className="card-text">Price: ${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
