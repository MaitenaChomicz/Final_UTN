import React ,{ use, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL;

const Buscar = ({ setProducts, fetchProducts }) => {
  const [query, setQuery] = useState('');
  const [setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const buscartermino = query
    if (buscartermino.trim()===''){
      fetchProducts();
      return
    }
    try {
      const res = await fetch(`${API_URL}/products/search?name=${encodeURIComponent(buscartermino)}`)
      const data = await res.json();
      
      if (data.success) {
        setProducts(data.data)
      } else {
        setProducts([]); 
        setError(data.message || 'No hay coincidencias con la busqueda.');
      }
    } catch (error) {
      setError(error.message)
    }

  };

  return (
    <form onSubmit={handleSubmit} className='formulario_busqueda'>
      <input 
      type="text"
      name='search'
      placeholder='Buscar un producto.'
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      className='input_busqueda'
    />
      <button type="submit" className='btn_busqueda'>Buscar</button>
    </form>
  )
}

export { Buscar }