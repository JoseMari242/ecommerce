import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '../../Interfaces/products';
import { CartItem } from '../../Interfaces/cartItem';
import { CartContextType } from '../../Interfaces/cartContextType';




const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
  removeItem: () => { },
  setCartItems: function (_items: CartItem[]): void {
    throw new Error('Function not implemented.');
  },
  favouritesItem: () => {},
    isInFavourites: () => false,
    favouriteItems: [],
    setFavouriteItems: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favouriteItems, setFavouriteItems] = useState<Product[]>([]);

  useEffect(() => {
    // Obtener productos del local storage si existen
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage));
    }
  }, []);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const increaseQuantity = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  };

  const removeItem = (item: CartItem) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  const favouritesItem = (product: Product) => {
    const existingItem = favouriteItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedFavouriteItems = favouriteItems.filter((item) => item.id !== product.id);
      setFavouriteItems(updatedFavouriteItems);
    } else {
      setFavouriteItems([...favouriteItems, product]);
    }
    localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
  };

  const isInFavourites = (productId: string) => {
    return favouriteItems.some((item) => item.id === productId);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem, setCartItems, favouritesItem, isInFavourites, favouriteItems, setFavouriteItems }}>
      {children}
    </CartContext.Provider>
  );
};




