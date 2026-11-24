import React, { useEffect, useState } from 'react'

const Product = () => {
     
    
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')           
        .then( response => response.json())
        .then( product=> setProduct(product)
        )
    },[])

 return (
    <>

        {
            product.map((p) => (
               <div className='card m-4' style={{width:'400px'}}>
        <img src={p.image} alt="emp_img" className='card-img-top' style={{height:'auto', width:'200px'}}/>

        <div className='card-header'>
            <h2>Id: {p.id}</h2>
            <h3>Title: {p.title}</h3>
        </div>

        <div className='card-body'>
            <p>Price : {p.price}</p>
            <p>Category : {p.category}</p>
            
        </div>
    </div>
    
            ))
        }

    
    </>
  )
}
export default Product;