import React,{ useEffect, useState } from 'react'

export default function Restorant() {
    let [products,setProducts] = useState([]);

    const getProduct = async()=>{
    let respose = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
    let data = await respose.json();
    console.log(data.recipes)
    setProducts(data.recipes);
  }

  useEffect( ()=>{
    getProduct();

  } , [])


  return (
    <div className='row mt-5'>
    {
      products.map((ele)=>{
        return <div className='col-md-4' key={ele.id}>
        <div className='w-50'>
          <img src={ele.image_url} className='w-100' />
        </div>
          <h2>{ele.title}</h2>
        </div>
      })
    }
  
  {}
 


  </div>  )
}
