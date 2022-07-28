import { IProduct } from './../models';
import { useEffect,useState } from "react"
import axios from "axios"
import { AxiosError } from "axios"



export function useProducts(){
    const [products,setProducts] = useState<IProduct[]>([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

function addProduct(product:IProduct){
    setProducts(prev=>[...prev,product])
}

  async function fethProducts() {
    try {
      setError('')
      setLoading(true)
      const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products/?limit=5')
      setProducts(res.data)
      setLoading(false)
    } catch (e:unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  
   }
  
  useEffect(()=>{
  fethProducts()
  },[])
  return {products,error,loading,addProduct}
}