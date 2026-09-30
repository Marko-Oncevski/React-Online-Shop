import { useState } from 'react'
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  
  const [cart,setCart] = useState([]);

  
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

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>React Online Shop</h1>
          <p>Choose your favorite products</p>
        </div>
      </header>

      <main className="shop-layout">
        <section className="products-section">
          <div className="section-title">
            <h2>Products</h2>
          </div>

          <ProductList addToCart={addToCart}/>
        </section>

        <aside className="cart-section">
          <Cart
            cart={cart}
            clearCart={clearCart}
            removeItem={removeItem}
          />
        </aside>
      </main>
    </div>
  );

}

export default App