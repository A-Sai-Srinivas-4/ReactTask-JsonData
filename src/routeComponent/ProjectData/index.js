import './index.css'
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import OldJson from './../OldJson/jsonData.json'
import ProjectDetails from '../ProjectDetails'

import CardItem from '../CardItem'





const ProjectData = () => {

    const developer_details=OldJson.map(eachItems=>{
    return eachItems.Projects
    })

    //console.log(developer_details)

const newArray=[]
const projectname = developer_details.map(eachItem=>{


   let x= eachItem.map((name)=>{
       const y= newArray.push(name.Name)
        return y
    })
    return x
})


const uniq_project_names = [...new Set(newArray)];
//console.log(uniq_project_names)



const randomcolors = () => {
    return  '#' +  Math.floor(Math.random() * 26743815).toString(6)
//      Adding css  style 26723815 style={{backgroundColor : randomcolors()}}
}

 //className="card-items" style={{borderTopColor: randomcolors()}}

      
 


    return(

        <>
        

        <div className="cards-lists">

        {uniq_project_names.map(eachName => {
            return (
                <>
                
                <CardItem  key={uuidv4()} details={eachName}  />
                
                
                
                </>
                
                 
            )
        })}

        
      </div>
      
  
        </>

    )
}

export default ProjectData


