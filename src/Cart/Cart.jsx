import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext';

import './Cart.scss'
const Cart = () => {
    const {showHideCart, cartItems, showCart} = useContext(CartContext);
    return (<>
       {showCart &&(
           <div className="cartWrapper">
           <div style={{textAlign: 'right'}}>
           <i style={{cursor: 'pointer'}} onClick={showHideCart}>

           </i></div>
           <div className="cartInnerWrapper">
               {cartItems.length === 0? (<h4>Cart is Empty</h4>):(
                   <ul>
                       {cartItems.map(item=>(CartItem))}
                   </ul>
               )}
           </div>
           </div>
       )}
    </>
    )
}

export default Cart
