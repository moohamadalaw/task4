 import React from 'react'
 import {Link} from 'react-router-dom'
 
 export default function Restorant() {
   return (
    <div className='row mt-5'>
        <div className='img w-25 me-5 col-4'>
            <img src="img/pizza-img.webp" alt="" className='w-100'/>
            <Link to='/pizza' >Click</Link>
        </div>

        <div className='img w-25 me-5 col-4'>
            <img src="img/salad-img.avif" alt="" className='w-100'/>
            <Link to='/salad' >Click</Link>
        </div>

        <div className='img w-25 me-5 col-4'>
            <img src="img/potato-im.jpg" alt="" className='w-100'/>
            <Link to='/potato'>Click</Link>
        </div>
    </div>

   

)
 }
 

