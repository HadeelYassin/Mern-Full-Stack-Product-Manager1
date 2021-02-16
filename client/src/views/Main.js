import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';
import axios from 'axios';
export default () => {
    const [products, setProducts]=useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allproducts')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductsList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}




