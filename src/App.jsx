import { useState } from 'react'
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import { Route,Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import { Search } from './pages/Search';

function App() {
  
  const [cart,setCart] = useState([]);

  const [isCartOpen,setIsCartOpen]= useState(false);
  let cartCount = 0;


  
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
    <Routes>
      <Route element={<Layout 
        cartCount={cartCount} 
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        isCartOpen={isCartOpen}
        clearCart={clearCart}
        removeItem={removeItem}
      />}>
        <Route index  element={<Home/>}/>
        <Route path='products' element={<Products
        addToCart = {addToCart}
        />}/>
        <Route path='products/:id' element={<ProductDetails/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='search' element={<Search 
        addToCart={addToCart}/> } />
        
      </Route>
      <Route path='*' element={<NotFound/>}/>
      
    
    </Routes>
  );

}

export default App