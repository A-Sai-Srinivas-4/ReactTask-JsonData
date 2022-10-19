//import ProjectData from "../ProjectData"
import { useParams } from "react-router-dom"
import Data from "../../data.json"



const ProjectDetails = ({match}) => {

    const {projectname} = useParams()
 
    //const projectDetailsArray = projectdetails.split(",")

    console.log( projectname)
     const myArray = []
  
     const fetchData = () => {
      
      const dataObj = Data.map(each => each.Projects.map(e => e.Name === projectname && ( myArray.push(each.Name) && (myArray.push(each.Role )))))
        return myArray
  }
  
  
  
    const projDetails = fetchData() 
    //console.log(details)
    console.log(projDetails)
  
   


    return(

        <>
        <h1>{projectname}</h1>
        <p> Name : {projDetails[0]}  Role :{projDetails[1]}</p>
       
        </>

    )
}

export default ProjectDetails