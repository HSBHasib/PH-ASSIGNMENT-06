import React from 'react'
import Carts from '../../Carts/Carts';
import { GiShoppingCart } from 'react-icons/gi';

const CartContent = ({selectProduct, setSelectProduct}) => {   
  return (
    <div>
      <div>
        {
          selectProduct.length === 0 ? 
            <div className='bg-white shadow-xl rounded-xl mx-20 p-4 min-h-[300px] flex flex-col'>
              <div>
                  <h2 className='text-lg font-black'>Your Cart</h2>
              </div>

              <div className='flex-grow flex flex-col justify-center items-center text-center'>
                  <GiShoppingCart className='opacity-40' size={70}/>
                  <p className='text-gray-400 font-medium text-xs'>Your cart is empty</p>
              </div>
          </div>
          : <Carts selectProduct={selectProduct} setSelectProduct={setSelectProduct} />
        }
      </div>
    </div>
  )
}

export default CartContent
