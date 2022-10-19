import EmployeeCard from '../EmployeeCard'
//import DataE from './../DataE/index.json'
import Json from './../Json/JsonData.json'

import './index.css'





  
  const DeveloperData = () => {
    return (
        <div className="container">
      
        <ul className="cards-list">
        {Json.map(eachCard => (
          <EmployeeCard cardDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
        </div>
    )
  }

  export default DeveloperData

