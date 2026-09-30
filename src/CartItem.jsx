function CartItem({cartItem, removeItem}){
    
    return (
        <div className="cart-item">

            <div className="cart-item-info">
                <h4>{cartItem.name}</h4>

                <div className="cart-item-details">
                    <span>Quantity: {cartItem.quantity}</span>
                    <span>${cartItem.price * cartItem.quantity}</span>
                </div>
            </div>

            <button className="remove-button" onClick={() => removeItem(cartItem)}>
                Remove
            </button>

        </div>
    );
}

export default CartItem;