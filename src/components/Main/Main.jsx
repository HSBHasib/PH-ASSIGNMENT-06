import DigitalTools from './DigitalTools/DigitalTools'
import GetStarted from './GetStarted/GetStarted'
import PricingContent from './PricingContent/PricingContent'
import WorkFlow from './WorkFlow/WorkFlow'

const Main = ({digitalToolsData}) => {
  return (
    <div>
        <DigitalTools digitalToolsData={digitalToolsData}/>
        <GetStarted />
        <PricingContent />
        <WorkFlow />
    </div>
  )
}

export default Main
