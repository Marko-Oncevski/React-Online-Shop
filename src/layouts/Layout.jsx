import { X } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function Layout({setIsCartOpen,isCartOpen}){


    
    return (

        <div className="app">
            <Header setIsCartOpen={setIsCartOpen}/>
            <Outlet/>
            {isCartOpen && (
            <>
                <div className='cart-overlay' onClick={(()=> setIsCartOpen(false))}>

                </div>
                <aside className="cart-drawer">
                    <button onClick={(()=> setIsCartOpen(false))} className='cart-close-button'>
                        <X size={22} strokeWidth={2} />
                    </button>
                    <Cart
                    />
                </aside>
            </>
            )}
            <Footer/>
        </div>

    );

}

export default Layout;