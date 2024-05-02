import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ProductDetail() {
    const[product,setProducts]=useState([]);
    const[id]=useState([]);
    useEffect(()=>{
        axios.get(`https://localhost:3000/products/${id}`)
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)})
        .catch(err=>console.log(err))
    })
  return (
    <div>
      <h1>Product Details </h1>
      {product && (
        <div>
            <h2>{product.productName}</h2>
            <h3>Company: {product.company}</h3>
            <h3>Category: {product.category}</h3>
            <h3>Price: {product.price}</h3>
            <h3>Rating: {product.rating}</h3>
            <h3>Discount: {product.discount}</h3>
            <h3>Availability: {product.availablility? 'yes':'Out-of-stock'}</h3>
        </div>
      )}
    </div>
  )
}
