import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import { ProductProvider } from '../Context/Products';
import { CartContextProvider } from '../Context/CartContext'; 
import Login from '../Pages/Log in';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/Products'; 
import ProtectedRoutes from '../Components/ProtectedRoutes';
import Cart from '../Pages/Cart/cart';
import Favourites from '../Pages/Favourites';
import { UserContextProvider } from '../Context/UserContext';

const AppRouter: React.FC = () => {
    return (
        <UserContextProvider>
        <AuthProvider>
            <CartContextProvider> 
                <BrowserRouter>
                    <ProductProvider>
                        <Routes>
                            <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
                            <Route path="/home" element={<ProtectedRoutes component={Home}/>} />
                            <Route path="/:id" element={<ProtectedRoutes component={ProductDetail} />} /> 
                            <Route path="/cart" element={<ProtectedRoutes component={Cart} />} />
                            <Route path="/favourites" element={<ProtectedRoutes component={Favourites} />} />
                        </Routes>
                    </ProductProvider>
                </BrowserRouter>
            </CartContextProvider>
        </AuthProvider>
        </UserContextProvider>
    );
}

export default AppRouter;






