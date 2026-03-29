import DigitalTools from './DigitalTools/DigitalTools'
import GetStarted from './GetStarted/GetStarted'
import PricingContent from './PricingContent/PricingContent'
import WorkFlow from './WorkFlow/WorkFlow'

const Main = ({digitalToolsData, selectProduct, setSelectProduct}) => {
  return (
    <div>
        <DigitalTools digitalToolsData={digitalToolsData} selectProduct={selectProduct} setSelectProduct={setSelectProduct}/>
        <GetStarted />
        <PricingContent />
        <WorkFlow />
    </div>
  )
}

export default Main
