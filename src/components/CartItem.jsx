import { useCart } from "../hooks/useCart";

function CartItem({cartItem }){
    const {dispatch} = useCart();
    
    return (
        <div className="cart-item">

            <div className="cart-item-info">
                <h4>{cartItem.title}</h4>

                <div className="cart-item-details">
                    <span>Quantity: {cartItem.quantity}</span>
                    <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
                </div>
            </div>

            <button className="remove-button" onClick={() => dispatch({type: "REMOVE_ITEM", payload: {id: cartItem.id} })}>
                Remove
            </button>

        </div>
    );
}

export default CartItem;