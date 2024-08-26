import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Cards.css'
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getProduct();
    }, [id]);

    if (!product) return <div className="container mt-5 text-center">
    <p>Loading...</p> 
</div>

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-primary mb-3">Back to Products</Link>
            <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" style={{ width: '250px' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"><b>Category: </b>{product.category}</p>
                    <p className="card-text"><b>Price: </b>${product.price}</p>
                    <p className="card-text"><b>Description: </b>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
