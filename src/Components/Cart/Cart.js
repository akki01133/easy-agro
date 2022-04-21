import React from 'react'
import './Cart.css'
import './CartItem.css'
import { getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'
import db from '../../firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'


const Cart = (props) => {
    const [productList, setProductList] = useState([])
    const ProductListRef = collection(db, "UserData/" + getAuth().currentUser.uid + "/Cart")

    const calcPrice = () => {
        let price = 0
        productList.forEach((product) => {
            price += parseInt(product.priceValue)
        })
        return price
    }
    var price = calcPrice()


    const getProducts = async () => {
        const data = await getDocs(ProductListRef);
        setProductList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        calcPrice()
    }
    useEffect(() => {
        getProducts();
    }, [])


    const removeItem = async (id) => {
        const newDoc = doc(db, "UserData/" + getAuth().currentUser.uid + "/Cart", id)
        await deleteDoc(newDoc)
        getProducts();
    }
    return (
        <div className="cart-container">
            <h3>Shopping Cart</h3>
            <p>You have {productList.length} item in your cart</p>

                <div className="productsList" >
                    {productList.map((product, index) => {
                        return (
                            <div className="cart-item-container" key={index}>
                                <div className="cart-product-image ">
                                    <img src={product.imgUrl} alt='product cart image'></img>
                                </div>
                                <div className="product-title">
                                    <h3>{product.title}</h3>
                                    <p>{product.subtitle}</p>
                                </div>
                                <div className="product-price">
                                    <h3>{product.priceValue}₹</h3>
                                </div>
                                <div className="remove-product ">
                                    <i
                                        className="fas fa-trash-alt remove"
                                        onClick={() => removeItem(product.id)}></i>
                                </div>

                                <hr></hr>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="grandTotal">
                    <p>total: <span>{price}</span></p>
                </div>
        </div>
    )
}

export default Cart;

