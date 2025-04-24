import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'

const URL = 'https://fakestoreapi.com/products'

export const MainContainer = () => {

  const [products,setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
        try{
            const response = await fetch(URL)
            const data = await response.json()
            setProducts(data)
        }catch(error){
            console.error("Error al cargar los productos:", error)
        }
    }
    fetchProducts()
  }, [])
  
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <section>
        
      </section>
    </main>
  )
}

