import React from 'react'
import CartItems from './CartItems';

function Cart({items}) {
    return (
      items.map(item => <CartItems key={item.pid} item={item} />)
    )
}

export default Cart;