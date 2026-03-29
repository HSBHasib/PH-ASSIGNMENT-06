import { use } from "react"
import Cards from "./Cards/Cards";

const PricingCards = ({pricingData}) => {
  const data = use(pricingData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        data.map(priceData => <Cards key={priceData.id} priceData={priceData}/> )
      }
    </div>
  )
}

export default PricingCards
