import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }
  
    useEffect(() => {
      getProducts()
    }, [url]); //we want it to run one time and then when url the url changes
    return {loading,products} //we return an object of loading and products from this
};
