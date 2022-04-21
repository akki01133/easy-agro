import React from 'react'
import './ProductItem.css'
import { getAuth } from 'firebase/auth'
import db from '../../firebase'
import {collection, addDoc,setDoc,doc} from 'firebase/firestore'

const ProductItem = (props) => {

  const addToCart=async (item)=>{
    const cartObj = {
      id:item.id,
      title: item.title,
      subtitle: item.subtitle,
      imgUrl: item.imgUrl,
      priceValue: item.priceValue,
    }
    await setDoc(doc(db,"UserData/"+getAuth().currentUser.uid+"/Cart", `${cartObj.id}`),cartObj)
    alert("product added to cart")
  }

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img id ="product-image" src={props.imgUrl} alt="product-image"></img>
      </div>
      <div className="txt-content">
        <h3 className="product-title">{props.title}</h3>
        <p className="product-subtitle">
          {props.subtitle}
        </p>
        <h3 className="priceValue">{props.priceValue}₹</h3>
      </div>

      <div className="shop-buttons">
        <button className="add-to-cart" onClick={()=>addToCart(props)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem;
