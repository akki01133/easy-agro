import React from 'react'
import ProductItem from './ProductItem.js'
import './Products.css'
import { useState,useEffect } from 'react'

import db from '../../firebase'
import {collection, getDocs,addDoc} from 'firebase/firestore'

function Products() {

    const [productList,setProductList] = useState([])
    const ProductListRef = collection(db,"ProductList")
    useEffect(()=>{
        const getProducts = async ()=>{
            const data = await getDocs(ProductListRef);
            setProductList(data.docs.map((doc)=>({...doc.data()})))
        }

        getProducts();

    },[])

    return (
        <div className="wrapper">
            <div className="products-container">
            {
                productList.map((product, index) => {
                    return (
                        <ProductItem  key={index} id={product.id} title={product.title} subtitle={product.subtitle} imgUrl={product.imgUrl} priceValue={product.price}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Products;
