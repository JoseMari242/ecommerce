// import React, { useContext } from 'react';


// import { useCart } from '../../Components/useCart';
// import { Link, useParams } from 'react-router-dom';
// import { productContext } from '../../Context/Products';
// import { Product } from '../../Interfaces/products';
// import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';


// const WishlistPage: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const products = useContext(productContext);
//     const { favouriteItems, addToCart } = useCart();

//     const product = products.find((product) => product.id === id) as unknown as Product;

//     const handleAddToCart = () => {
//         addToCart(product);
//     };

//     return (
//         <>
//         <Header/>
//         <div>
//             <h2>Wishlist</h2>
//             {favouriteItems.map((product) => (
//                 <div key={product.id}>
//                     <h3>{product.Name}</h3>
//                     <img src={product.image} alt={product.Name} />
//                     <p>Price: {product.price}</p>
//                     {/* Botón para agregar el producto al carrito */}
//                     <button onClick={handleAddToCart}>Buy!</button>
//                 </div>
//             ))}
//         </div>
//         <Link to={`/cart`}>
//         <button onClick={() => addToCart(product)}>Buy!</button>
//       </Link>
//       <Footer/>
//     </>
//     );
// };

// export default WishlistPage;



// import React, { useContext } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useCart } from '../../Components/useCart';
// import { productContext } from '../../Context/Products';
// import { Product } from '../../Interfaces/products';
// import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';

// const WishlistPage: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const products = useContext(productContext);
//     const { favouriteItems, addToCart, setFavouriteItems  } = useCart();

//     // Función para agregar un producto al carrito
//     const handleAddToCart = (product: Product) => {
//         addToCart(product);
//     };

//     const removeFav = (itemToRemove) => {
//         const updatedItems = favouriteItems.filter(item => item !== itemToRemove);
//         setFavouriteItems(updatedItems);
//       };

//     return (
//         <>
//             <Header />
//             <div>
//                 <h2>Wishlist</h2>
//                 {favouriteItems.map((product) => (
//                     <div key={product.id}>
//                         <h3>{product.Name}</h3>
//                         <img src={product.image} alt={product.Name} />
//                         <p>Price: {product.price}</p>
//                         <button onClick={() => handleAddToCart(product)}>Buy!</button>
//                         <button className='' onClick={() => removeFav(item)}>Remove</button>
//                     </div>
//                 ))}
//             </div><Link to={`/cart`}>
//             <button>Ir al carrito</button>
//             </Link>
//             <Footer />
//         </>
//     );
// };

// export default WishlistPage;
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../Components/useCart';
import { productContext } from '../../Context/Products';
import { Product } from '../../Interfaces/products';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const WishlistPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const products = useContext(productContext);
    const { favouriteItems, addToCart, setFavouriteItems  } = useCart();

    // Función para agregar un producto al carrito
    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    const removeFav = (itemToRemove: Product) => {
        const updatedItems = favouriteItems.filter(item => item !== itemToRemove);
        setFavouriteItems(updatedItems);
    };

    return (
        <>
            <Header />
            <div>
                <h2>Wishlist</h2>
                {favouriteItems.map((product) => (
                    <div key={product.id}>
                        <h3>{product.Name}</h3>
                        <img src={product.image} alt={product.Name} />
                        <p>Price: {product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Buy!</button>
                        <button className='' onClick={() => removeFav(product)}>Remove</button>
                    </div>
                ))}
            </div>
            {/* <Link to={`/cart`}>
                <button>Ir al carrito</button>
            </Link> */}
            <Footer />
        </>
    );
};

export default WishlistPage;
