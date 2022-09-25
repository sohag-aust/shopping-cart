import React from 'react'
import CartItems from './CartItems';

function Cart({items}) {
  return (
    items.map(item => <CartItems item={item} />)
  )
}

export default Cart;