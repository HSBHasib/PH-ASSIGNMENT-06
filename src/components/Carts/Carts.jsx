import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Carts = ({ selectProduct, setSelectProduct }) => {

    const handleRemove = (id, name) => {
        const remaining = selectProduct.filter(item => item.id !== id);
        setSelectProduct(remaining);
        toast.success(`${name} Remove successfully!`);
    }

    const handleProceed = () => {
        if(selectProduct.length > 0) {
          setSelectProduct([]);
          toast.success(`Proceed successfull!`);
          }
    }

    // Calculate Total Price
    const totalPrice = selectProduct.reduce((total, item) => total + item.price, 0);

    return (
        <div className='bg-white shadow-xl rounded-xl md:mx-20 mx-6 p-7 min-h-[300px] flex flex-col'>
            <h2 className='text-2xl font-bold text-gray-900 mb-8'>Your Cart</h2>

            <div className='space-y-4 flex-grow'>
                {selectProduct.length > 0 ? (
                    selectProduct.map((product) => (
                        <div key={product.id} className='sm:flex items-center justify-between p-4 bg-gray-100 rounded-xl border border-gray-50'>
                            <div className='flex items-center gap-4'>
                                <div className='w-14 h-14 bg-white rounded-full p-3 flex items-center justify-center border border-gray-200'>
                                    <img src={product.icon} alt={product.name} className='w-full h-full object-contain' />
                                </div>
                                <div>
                                    <h3 className='text-[15px] font-bold text-gray-800'>{product.name}</h3>
                                    <p className='text-gray-400 text-sm'>${product.price}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleRemove(product.id, product.name)}
                                className='text-rose-500 text-sm font-semibold hover:underline cursor-pointer'
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <div className='text-center py-10 flex justify-center items-center flex-col'>
                        <GiShoppingCart className='opacity-40' size={100}/>
                        <h1 className='text-gray-400 opacity-70 text-sm'>Your cart is empty</h1>
                    </div>
                )}
            </div>

            {selectProduct.length > 0 && (
                <div className='mt-10 pt-6 border-t border-gray-100'>
                    <div className='flex justify-between items-center mb-6'>
                        <span className='text-gray-400 font-medium'>Total:</span>
                        <span className='text-3xl font-extrabold text-gray-900'>${totalPrice}</span>
                    </div>
                    
                    <button onClick={() => handleProceed(selectProduct.name)} className='w-full py-3 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white rounded-full font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-indigo-200 cursor-pointer'>
                        Proceed To Checkout
                    </button>
                </div>
            )}
        </div>
    )
}

export default Carts
