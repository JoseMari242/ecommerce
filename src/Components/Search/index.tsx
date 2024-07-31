import React, { ChangeEvent, useEffect, useState } from 'react'
import './search.css'
import { Product } from '../../Interfaces/products';

type Props = {
    
    setShowSearch: Function;
  };
  

export default function Search(props: Props) {
    const [searched, setSearched] = useState('');
    const [productData, setProductData] = useState<Product[]>([]);

    
    
  useEffect(() => {
    getProductsApi();
  }, []);
  
  async function getProductsApi() {
      try {
        const data = await fetch('src/assets/Data/products.json');
        const JSONdata = await data.json();
        setProductData(JSONdata);
      } catch (error) {
        console.log(error);
      }
    }
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        setSearched(ev.target.value);
        search(ev.target.value);
      };
      
      function search(params: string) {
        console.log('Search string:', params);
        const resultsProduct = productData.filter((product) => {
          return params && product.Name.toLowerCase().includes(params.toLowerCase());
        });
        console.log('Filtered products:', resultsProduct);
        props.setShowSearch(resultsProduct); 
      }
  return (
    <input
    type="search"
    className="search"
    placeholder="Search"
    value={searched}
    onChange={handleChange}
  />
  )
}

