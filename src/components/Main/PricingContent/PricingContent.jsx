import { Suspense } from "react";
import PricingCards from "./PrcingCards/PricingCards";

const PricingContent = () => {
    const fetchPricingData = async () => {
        const res = await fetch('/pricingData.json');
        const data = await res.json();
        return data;
    }
    const pricingData = fetchPricingData();

  return (
    <div className="flex flex-col justify-center items-center py-20 gap-12">
        <div className="text-center space-y-1">
            <h1 className="text-[40px] font-extrabold text-gray-900">Simple, Transparent Pricing</h1>
            <p className="text-gray-500 text-[15px]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div>
            <Suspense>
                <PricingCards pricingData={pricingData} />
            </Suspense>
        </div>
      
    </div>
  )
}

export default PricingContent
