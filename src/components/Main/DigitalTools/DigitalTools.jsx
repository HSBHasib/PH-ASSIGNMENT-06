import { use, useState } from "react"
import ProductsContent from "../ProductsContent/ProductsContent";
import CartContent from "../CartContent/CartContent";

const DigitalTools = ({digitalToolsData}) => {
    const data = use(digitalToolsData);
    const [isSelected, setIsSelected] = useState('products');
    // const []

  return (
    <div className="my-18 space-y-5">
        {/* Heading */}
      <div className="text-center space-y-1">
            <h1 className="text-[40px] font-extrabold text-gray-900">Premium Digital Tools</h1>
            <p className="text-gray-500 text-[15px] md:max-w-[40%] mx-auto">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center">
            <div className="shadow-md inline-block rounded-full border-[1.5px] border-gray-100">
                <button onClick={() => setIsSelected('products')} className={`
                ${isSelected === 'products' ? 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white font-semibold' : 'bg-white text-[#25065D] font-medium'}
                px-5 py-2.5 cursor-pointer border-none rounded-full overflow-hidden`}>Products</button>
                <button onClick={() => setIsSelected('carts')} className={`
                ${isSelected === 'carts' ? 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white font-semibold' : 'bg-white text-[#25065D] font-medium'}
                px-5 py-2.5 cursor-pointer border-none rounded-full`}>Carts(0)</button>
            </div>
        </div>

        {
            isSelected === 'products' ? <ProductsContent data={data} /> : <CartContent />    
        }
    </div>
  )
}

export default DigitalTools
