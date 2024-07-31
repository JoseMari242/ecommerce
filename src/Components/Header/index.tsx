import React from 'react';
import './header.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../useCart';
import { FaHeart } from "react-icons/fa";
import { useUserContext } from '../../Context/UserContext';
import { RxExit } from "react-icons/rx";

export default function Header() {
  const { cartItems, favouriteItems } = useCart();
  const navigate = useNavigate();
  const user = useUserContext();

  function handleClickLogOut() {
    navigate('/');
    localStorage.removeItem('user');
  }

  return (
    <div> 
      <header>
        <h1 className="header">
          <Link to="/home" className="home-link">
            <IoHome className='home-icon'/> 
          </Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className='cart-icon'/>
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>} 
          </Link>
          <Link to={`/Favourites`}>
            <FaHeart />
          {favouriteItems.length > 0 && <span className="cart-count">{favouriteItems.length}</span>} 
            </Link>
        <span onClick={handleClickLogOut} className="cart-icon"><RxExit /></span>

        </h1>

        <p className="user">Hello, {user.user?.Name}!</p>


      </header>
    </div>
  );
}

// import React, { useState } from 'react';
// import { FaShoppingCart } from "react-icons/fa";
// import { IoHome } from "react-icons/io5";
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../useCart';
// import { FaHeart } from "react-icons/fa";
// import { useUserContext } from '../../Context/UserContext';
// import { CartItem } from '../../Interfaces/cartItem';
// import { HiMiniArchiveBoxXMark } from 'react-icons/hi2';
// import { Product } from '../../Interfaces/products';

// export default function Header() {
//   const { cartItems, favouriteItems, increaseQuantity, decreaseQuantity, setCartItems, addToCart, setFavouriteItems } = useCart();
//   const navigate = useNavigate();
//   const user = useUserContext();


//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isWishlistOpen, setIsWishlistOpen] = useState(false);

//   function handleClickLogOut() {
//     navigate('/');
//     localStorage.removeItem('user');
//   }
//   const handleIncreaseQuantity = (item: CartItem) => {
//     increaseQuantity(item);
//   };

//   const handleDecreaseQuantity = (item: CartItem) => {
//     decreaseQuantity(item);
//   };
//   const removeItem = (itemToRemove: CartItem ) => {
//     const updatedItems = cartItems.filter(item => item !== itemToRemove);
//     setCartItems(updatedItems);
//   };
//   const handleAddToCart = (product: Product) => {
//     addToCart(product);
// };

// const removeFav = (itemToRemove: Product) => {
//     const updatedItems = favouriteItems.filter(item => item !== itemToRemove);
//     setFavouriteItems(updatedItems);
// };

//   return (
//     <div>
//       <header>
//         <h1 className="header">
//           <Link to="/home" className="home-link">
//             <IoHome className='home-icon'/>
//           </Link>
//           <Link
//             to="/cart"
//             className="cart-link"
//             onMouseEnter={() => setIsCartOpen(true)}
//             onMouseLeave={() => setIsCartOpen(false)}
//           >
//             <FaShoppingCart className='cart-icon'/>
//             {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
//             {isCartOpen && (
//               <div className="cart-content">
//                 {cartItems.map((item, index) => (
//               <div className='card' key={index}>
//                 <img src={item.product.image} alt={item.product.Name} />
//                 <div className='item-details'>
//                   <h3>{item.product.Name}</h3>
//                   <p>Price: {item.product.price} €</p>
//                   <div className='quantity'>
//                   <span>Quantity: {item.quantity}</span>
//                     <button className='button-cart' onClick={() => handleDecreaseQuantity(item)}>−</button>
//                     <button className='button-cart' onClick={() => handleIncreaseQuantity(item)}>+</button>
//                   </div>
//                 </div>
//                 <button className='button-cart' onClick={() => removeItem(item)}><HiMiniArchiveBoxXMark /></button>
//               </div>
//             ))}
//                 <p>Cart content goes here</p>
//               </div>
//             )}
//           </Link>
//           <Link
//             to="/Favourites"
//             className="wishlist-link"
//             onMouseEnter={() => setIsWishlistOpen(true)}
//             onMouseLeave={() => setIsWishlistOpen(false)}
//           >
//             <FaHeart className='wishlist-icon'/>
//             {favouriteItems.length > 0 && <span className="wishlist-count">{favouriteItems.length}</span>}
//             {isWishlistOpen && (
//               <div className="wishlist-content">
//                 {favouriteItems.map((product) => (
//                     <div key={product.id}>
//                         <h3>{product.Name}</h3>
//                         <img src={product.image} alt={product.Name} />
//                         <p>Price: {product.price}</p>
//                         <button onClick={() => handleAddToCart(product)}>Buy!</button>
//                         <button className='' onClick={() => removeFav(product)}>Remove</button>
//                     </div>
//                 ))}
//                 <p>Wishlist content goes here</p>
//               </div>
//             )}
//           </Link>
//         </h1>

//         <p>Hello, {user.user?.Name}!</p>

//         <button onClick={handleClickLogOut}>Logout</button>

//       </header>
//     </div>
//   );
// }
