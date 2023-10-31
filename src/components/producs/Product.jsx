import React,{ useEffect, useState } from 'react'
export default function Product() {

  let [products,setProducts] = useState([]);

  const getProduct = async()=>{
    let respose = await fetch('https://fakestoreapi.com/products')
    let data = await respose.json();
    setProducts(data);
  }

  useEffect( ()=>{
    getProduct();

  } , [])

  

  return (
    <div className='row'>
      {
        products.map((ele)=>{
          return <div className='col-md-4' key={ele.id}>
            <h2>{ele.title}</h2>
            <img src={ele.image} className='w-100' />
          </div>
        })
      }
    
    {}
   

  
    </div>
  )
}












/*
import React,{ useEffect, useState } from 'react'
export default function Product() {

  const [user,setUser] = useState({name:'',email:''})



  useEffect( ()=> {
    console.log("useEffect")
    setUser({name:'mohammad',email:'mohammad@gmail.com'})
  } , [] );

      



  return (
    <>
    {console.log("return")}
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>

  
    </>
  )
}












/*
import React, { useState } from 'react'


export default function Product() {


    let[products,setProducts] = useState(
        [
            {id:1,title:'product one',price:1000,sale:true},
            {id:2,title:'product two',price:2000,sale:true},
            {id:3,title:'product three',price:3000,sale:false},

        ]
    )
    
 
  return (
    <>
        {products.map( (product)=>{
            return <div className='product' key={product.id}>{product.title}</div>
        } )}
    </>
   
  )
}

*/