import { useState } from 'react'
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  
  const [cart,setCart] = useState([]);
  const [selectedProduct,setSelectedProduct] = useState(null);
  const [isCartOpen,setIsCartOpen]= useState(false);
  let cartCount = 0;

  function selectProduct(product){
    return setSelectedProduct(product);
  }

  
  function clearCart(){
    return setCart([]);
  }


  function addToCart(product){
    const foundItem = cart.find(item=> item.id === product.id);
    if(foundItem){
      const updatedCart = cart.map(item=> {
        if(item.id === product.id){
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }

        return item;
      })

      setCart(updatedCart);

    } else {
      setCart(prev=> [...prev, {...product, quantity: 1}])
    }
  }


  function removeItem(product){
    const foundItem = cart.find(item=> item.id === product.id);

    if(foundItem.quantity === 1){
      const updatedCart = cart.filter(item => item.id !== product.id);
      setCart(updatedCart);

    } else {

      const updatedCart = cart.map(item => {
        if(item.id === product.id){
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }

        return item;
      })

      setCart(updatedCart); 
    }
  }
  
  cart.forEach(item=>{
    cartCount += item.quantity
  })

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="logo-icon">N</div>

          <div className="brand-text">
            <h1>Nexora</h1>
            <p>Shop smarter. Live better.</p>
          </div>
        </div>

        <button className="cart-button" onClick={() => setIsCartOpen(true)}>
          <span className="cart-button-icon">🛒</span>
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </button>
      </header>

      <main className={`shop-layout ${selectedProduct ? "details-layout" : ""}`}>
        <section className="products-section">
          <div className="section-title">
            <h2>Products</h2>
          </div>

          {selectedProduct ? 
          <ProductDetails 
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          /> : 
          <ProductList 
            addToCart={addToCart}
            selectProduct={selectProduct}
          />}
          
        </section>


        {isCartOpen && 
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
        }   

        
      </main>
    </div>
  );

}

export default App