import React from 'react'
import Carts from '../../Carts/Carts';
import { GiShoppingCart } from 'react-icons/gi';

const CartContent = ({selectProduct, setSelectProduct}) => {
   console.log(selectProduct);
   
  return (
    <div>
      <div>
        {
          <Carts selectProduct={selectProduct} setSelectProduct={setSelectProduct} />
        }
      </div>
    </div>
  )
}

export default CartContent
