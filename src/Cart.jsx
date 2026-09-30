import CartItem from "./CartItem";

function Cart({cart, clearCart, removeItem}){
    let total = 0;

    return (
        <div className="cart-container">

            <div className="cart-header">
                <div>
                    <h2>Shopping Cart</h2>
                    <p>{cart.length} {cart.length === 1 ? "item" : "items"}</p>
                </div>

                <span className="cart-icon">🛒</span>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <div className="empty-icon">🛍️</div>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started.</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => {
                            return (
                                <CartItem
                                    key={item.id}
                                    cartItem={item}
                                    removeItem={removeItem}
                                />
                            )
                        })}
                    </div>

                    {cart.forEach(element => {
                        total += element.price * element.quantity
                    })}

                    <div className="cart-summary">
                        <div className="total-row">
                            <span>Total</span>
                            <strong>${total}</strong>
                        </div>

                        <button className="clear-button" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;