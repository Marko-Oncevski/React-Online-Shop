import { createContext,useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    items: []
}

function cartReducer(state,action){
    switch (action.type){
        case "ADD_ITEM":{
            const foundCart = state.items.find(product=> product.id === action.payload.id)
            if(foundCart){
                return {
                    ...state,
                    items: state.items.map(product=> {
                        if(product.id === action.payload.id){
                            return {
                                ...product,
                                quantity: product.quantity + 1
                            }
                        }
                        return product;
                    })
                    
                }
                
            }

            return {
                ...state,
                items: [...state.items,{...action.payload,quantity: 1}]
            }
        }
        case "REMOVE_ITEM":{
            const foundItem = state.items.find(product => product.id === action.payload.id)
            if(foundItem.quantity === 1){
                return {
                    ...state,
                    items: state.items.filter(product => product.id !== action.payload.id)
                }
            } else {
                return {
                    ...state,
                    items: state.items.map(product => {
                        if(product.id === action.payload.id){
                            return {
                                ...product,
                                quantity: product.quantity - 1
                            }
                        }
                        return product
                    })
                }

            }
            
        }
        case "CLEAR_CART":{
            return {
                ...state,
                items: []
            }
        }
        default:
            return state
    }
}


export function CartProvider({children}){
    const [state,dispatch] = useReducer(cartReducer,initialState);
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}


