import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Products() {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`https://localhost:3000/products`)
    .then(res=>{
        console.log(res.data)
        setProducts(res.data)})
    .catch(err=>console.log(err))
  },[]);
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map(x => (
          <li key={x.id}>{x.productName}</li>
        ))}
      </ul>
    </div>
  )
}
