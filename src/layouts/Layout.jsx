import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
function Layout({cartCount,setIsCartOpen,cart,isCartOpen,clearCart,removeItem}){
    return (
        <div className="app">
            <Header cartCount={cartCount} setIsCartOpen={setIsCartOpen}/>
            <Outlet/>
            {isCartOpen && (
            <>
                <div className='cart-overlay' onClick={(()=> setIsCartOpen(false))}>

                </div>
                <aside className="cart-drawer">
                    <button onClick={(()=> setIsCartOpen(false))} className='cart-close-button'>X</button>
                    <Cart
                    cart={cart}
                    clearCart={clearCart}
                    removeItem={removeItem}
                    />
                </aside>
            </>
            )}
            <Footer/>
        </div>

    );

}

export default Layout;