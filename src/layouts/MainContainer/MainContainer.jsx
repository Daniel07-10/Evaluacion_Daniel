import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { InputFiltro } from '../../components/InputFiltro/InputFiltro'

const URL = 'https://fakestoreapi.com/products'

export const MainContainer = () => {

  const [products,setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [filtered,setFiltered] = useState([])
  
  useEffect(() => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    setFiltered(results)
  }, [search, products])

  useEffect(() => {
    const fetchProducts = async () => {
        try{
            const response = await fetch(URL)
            const data = await response.json()
            setProducts(data)
            setFiltered(data) // importante: también se guarda una copia para el filtro
        }catch(error){
            console.error("Error al cargar los productos:", error)
        }
    }
    fetchProducts()
  }, [])

  
  
  return (
    <main className="p-6 w-5/6 mx-auto">
        <InputFiltro search={search} setSearch={setSearch} />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
                <Card key={product.id} {...product} />
            ))}
        </section>
    </main>
  )
}

