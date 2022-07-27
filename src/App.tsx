
import React from 'react'
import { Product } from './component/Product'
import { products } from './data/products'


export default function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
       <Product product={products[0]} />
       <Product product={products[1]} />

    </div>
  )
}
