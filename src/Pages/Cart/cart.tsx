import React from 'react';
import { useCart } from '../../Components/useCart';
import Header from '../../Components/Header';
import "./cart.css"
import Footer from '../../Components/Footer';
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { CartItem } from '../../Interfaces/cartItem';


const CartPage: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, setCartItems } = useCart(); 

  const removeItem = (itemToRemove: CartItem ) => {
    const updatedItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedItems);
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    increaseQuantity(item);
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    decreaseQuantity(item);
  };

  return (
    <>
    <Header />
    <div className=''>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className='cart-container'>
            {cartItems.map((item, index) => (
              <div className='card' key={index}>
                <img src={item.product.image} alt={item.product.Name} />
                <div className='item-details'>
                  <h3>{item.product.Name}</h3>
                  <p>Price: {item.product.price} €</p>
                  <div className='quantity'>
                  <span>Quantity: {item.quantity}</span>
                    <button className='button-cart' onClick={() => handleDecreaseQuantity(item)}>−</button>
                    <button className='button-cart' onClick={() => handleIncreaseQuantity(item)}>+</button>
                  </div>
                </div>
                <button className='button-cart' onClick={() => removeItem(item)}><HiMiniArchiveBoxXMark /></button>
              </div>
            ))}
          </div>
          <div className='total'>
            
            <p>Total: {cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)} €</p>
          </div>
          
        </>
      )}
        <button className='checkout-button'>Pay!</button>
    </div>
    <Footer />
    </>
  );
};

export default CartPage;
