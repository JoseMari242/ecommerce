import { CartItem } from "./cartItem";
import { Product } from "./products";

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (item: CartItem) => void;
    decreaseQuantity: (item: CartItem) => void;
    removeItem: (item: CartItem) => void; 
    setCartItems: (items: CartItem[]) => void;
    favouritesItem: (product: Product) => void;
    isInFavourites: (productId: string) => boolean;
    favouriteItems: Product[];
    setFavouriteItems: (product: Product[]) => void;
  }
  