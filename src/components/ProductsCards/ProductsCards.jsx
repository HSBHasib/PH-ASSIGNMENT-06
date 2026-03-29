import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ProductsCards = ({productData, selectProduct, setSelectProduct}) => {
    const {name, description, price, period, tag, tagType, features, icon} = productData;
    const [isSelected, setIsSelected] = useState(false);

    const isAlreadySelected = selectProduct.some(product => product.name === name);

    const handleSelectedBtn = () => {
        if(!isAlreadySelected) {
            setIsSelected(true);
            setSelectProduct([...selectProduct, productData]);
            toast.success(`${name} add successfully!`);
        }
    }

    const tagColorMap = {
    'best-seller': 'bg-[#FEF3C6] text-[#BB4D00]',
    'popular': 'bg-[#E1E7FF] text-[#9216FA]',
    'new': 'bg-[#DBFCE7] text-[#0A883E]'
    };

  return (
    <div>
        <div className="bg-white border border-gray-100 rounded-xl py-8 px-6  flex flex-col h-full shadow-sm hover:shadow-md transition-all">
      
        <div className="flex justify-between items-start mb-3">
            <div className="w-13 h-13 flex items-center justify-center border border-gray-200 rounded-full p-3">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
            </div>
            {tag && (
            <span className={`px-4 py-1 rounded-full text-xs font-medium 
            ${tagColorMap[tagType] || 'bg-gray-50 text-gray-400'}`}>
                {tag}
            </span>
            )}
        </div>

        <div>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-400 text-sm mt-2 leading-5">
            {description}
            </p>
        </div>

        <div className="my-4">
            <span className="text-2xl font-extrabold text-gray-900">${price}</span>
            <span className="text-gray-400 text-sm">/{period}</span>
        </div>

        <ul className="space-y-1.5 mb-5 flex-grow">
            {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <FiCheck className="text-green-500 shrink-0" size={20} />
                {feature}
            </li>
            ))}
        </ul>

        <button onClick={() => handleSelectedBtn(productData)} className={`
            ${isSelected ? 'bg-green-500' : 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]' }
            w-full py-2.5 text-white rounded-full font-semibold text-[16px] hover:opacity-90 transition-all active:scale-95 duration-150 cursor-pointer`}>
            {isSelected ? 'Added to cart' : 'Buy Now'}
        </button>

        </div>
    </div>
  )
}

export default ProductsCards
