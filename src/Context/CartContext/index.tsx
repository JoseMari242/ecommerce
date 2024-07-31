import React, { ReactNode } from 'react';
import { CartProvider } from '../../Components/useCart';

interface CartContextProviderProps {
  children: ReactNode;

}
export const CartContextProvider: React.FC<CartContextProviderProps> = (props) => {
 
  return <CartProvider {...props} />;
};
