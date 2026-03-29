import { FiCheck } from 'react-icons/fi';

const Cards = ({priceData}) => {
    const {planName, description, price, period, features, buttonText, isPopular, tag} = priceData;
  return (
     <div className={`relative rounded-2xl flex flex-col w-80 h-full p-4 transition-all duration-300 ${
      isPopular 
      ? "bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white shadow-2xl scale-105 z-10 py-6" 
      : "bg-white text-gray-800 border border-gray-100 shadow-sm"
    }`}>
      
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] px-4 py-1 rounded-full text-xs font-medium shadow-sm whitespace-nowrap">
          {tag || "Most Popular"}
        </div>
      )}

      {/* Title & Subtitle */}
      <div>
        <h3 className="text-2xl font-bold">{planName}</h3>
        <p className={`text-sm mt-1 ${isPopular ? "text-purple-100" : "text-gray-500"}`}>
          {description}
        </p>
      </div>

      {/* Price Section */}
      <div className="my-5">
        <span className="text-5xl font-extrabold">${price}</span>
        <span className={`text-lg ${isPopular ? "text-purple-200" : "text-[#627382]"}`}>
          /{period}
        </span>
      </div>

      {/* Features List */}
      <ul className="space-y-1 mb-7 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm font-medium ">
            <FiCheck className={isPopular ? "text-white" : "text-green-500"} size={20} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button className={`w-full py-3 rounded-full font-bold transition-all duration-150 active:scale-95 cursor-pointer ${
        isPopular 
        ? "bg-white text-[#8F17FA] hover:bg-gray-100" 
        : "bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white hover:opacity-90"
      }`}>
        {buttonText}
      </button>
    </div>
  )
}

export default Cards