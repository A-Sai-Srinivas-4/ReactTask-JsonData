import EmployeeCard from '../EmployeeCard'
//import DataE from './../DataE/index.json'
import Json from './../Json/JsonData.json'

import './index.css'


// const developerList = [
//     {
//       "id" : 1,
//       "Name": "Nikhil",
//       "Role": "Sr. Developer",
//       "image_url" : "https://www.kindpng.com/picc/m/4-41409_developer-png-png-download-developer-png-no-background.png",
//       "Experience": "4 Years",
//       "Tech Stack": "React,Node & P9",
//       "Employment": "Full Time",
//       "Offshore": "True",
//       "Projects": [
//         {
//           "Name": "Transmart",
//           "Current Sprint": "",
//           "Next Release": "20/10/2022",
//           "Role": "Developer",
//           "Tech Stack": "React,P9"
//         }
//       ]
//     },
//     {
//       "id" : 2,
//       "Name": "Raushan",
//       "Role": "Sr. Developer",
//       "image_url" : "https://www.kindpng.com/picc/m/4-41409_developer-png-png-download-developer-png-no-background.png",
//       "Experience": "4 Years",
//       "Tech Stack": "React,Node & P9",
//       "Employment": "Full Time",
//       "Offshore": "True",
//       "Projects": [
//         {
//           "Name": "IAVR Enterprise",
//           "Current Sprint": "",
//           "Next Release": "20/10/2022",
//           "Role": "Developer",
//           "Tech Stack": "React,P9",
//           "Allocation": "30%"
//         },
//         {
//           "Name": "PCA",
//           "Current Sprint": "",
//           "Next Release": "20/10/2022",
//           "Role": "Developer",
//           "Tech Stack": "React,P9",
//           "Allocation": "30%"
//         }
//       ]
//     },
//     {
//       "id" : 3,
//       "Name": "Sirisha",
//       "Role": "QA",
//       "image_url" : "https://www.kindpng.com/picc/m/4-41409_developer-png-png-download-developer-png-no-.png",
//       "Experience": "1 Year",
//       "Tech Stack": "Manual,TOSCA",
//       "Employment": "Full Time",
//       "Offshore": "True",
//       "Projects": [
//         {
//           "Name": "IAVR Enterprise",
//           "Current Sprint": "",
//           "Next Release": "20/10/2022",
//           "Role": "QA",
//           "Tech Stack": "React,P9",
//           "Allocation": "30%"
//         }
//       ]
//     },
//     {
//       "id" : 4,
//       "Name": "Garima",
//       "Role": "Scrum Master",
//       "image_url" : "https://www.kindpng.com/picc/m/4-41409_developer-png-png-download-developer-png-no-background.png",
//       "Experience": "1 Year",
//       "Tech Stack": "",
//       "Employment": "Full Time",
//       "Offshore": "False",
//       "Projects": [
//         {
//           "Name": "IAVR Enterprise",
//           "Current Sprint": "",
//           "Next Release": "20/10/2022",
//           "Role": "Scrum Master",
//           "Tech Stack": "",
//           "Allocation": "30%"
//         },
//         {
//           "Name": "PAC",
//           "Current Sprint": "",
//           "Next Release": "20/10/2022",
//           "Role": "Scrum Master",
//           "Tech Stack": "",
//           "Allocation": "30%"
//         }
//       ]
//     }
//   ]


  
  const Data = () => {
    return (
        <div className="container">
        <h1 className="heading">Developer-Details</h1>
        <ul className="cards-list">
        {Json.map(eachCard => (
          <EmployeeCard cardDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
        </div>
    )
  }

  export default Data

