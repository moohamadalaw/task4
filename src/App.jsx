import React from 'react'
import Product from './components/producs/Product'
import Navbar from './navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pizza from './components/Pizza/Pizza'
import Salad from './components/salad/Salad'
import Restorant from './components/Restorant/Restorant'
import Potato from './components/potato/Potato'
import PageNotFound from './components/pageNotFound/PageNotFound'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

     <Route path='/products' element={<Product />} />
     <Route path='/restorant' element={<Restorant />} />
     <Route path='/pizza' element={<Pizza />} />
     <Route path='/salad' element={<Salad />} />
     <Route path='/potato' element={<Potato />} />
     <Route path='*' element={<PageNotFound/>} />


    </Routes>
    </BrowserRouter>
    </>
    
    

   

  )
}
