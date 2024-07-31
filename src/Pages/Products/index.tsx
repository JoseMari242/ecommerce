import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../../Context/Products';
import './products.css';
import { useCart } from '../../Components/useCart';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Product } from '../../Interfaces/products';



const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useContext(productContext);
  const { addToCart } = useCart();

  
  const product = products.find((product) => product.id === id) as unknown as Product; 
  
  if (!product) {
    return <div>Product not found</div>;
  }

 
  return (
    <>
    <Header />
      <div className='card-products'>
        <h2>{product.Name}</h2>
        <div className='card'>
          <img src={product.image} alt={product.Name} />
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      </div>
      <Link to={`/cart`}>
        <button onClick={() => addToCart(product)}>Buy!</button>
      </Link>
      <Footer />
    </>
  );
};

export default ProductDetail;


