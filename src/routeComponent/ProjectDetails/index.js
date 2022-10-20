//import ProjectData from "../ProjectData"
import { useParams } from "react-router-dom"
import Data from "../../data.json"
import "./index.css"



const ProjectDetails = ({match}) => {

    const {projectname} = useParams()
 
    //const projectDetailsArray = projectdetails.split(",")

    //console.log( projectname)
     const myArray = []
  
     const fetchData = () => {
      
      const dataObj = Data.map(each => each.Projects.map(e => e.Name === projectname && ( myArray.push(each.Name) && (myArray.push(each.Role )))))
        return myArray
  }
  
  
  
    const projDetails = fetchData() 
    //console.log(details)
    //console.log(projDetails)
  
    const Name = []
    const Role = []
    const  details = {}

    for (var i = 0; i < projDetails.length; i++) {
        if(i % 2 === 0) { // index is even
            Name.push(projDetails[i]);
            details.Name = Name;
        }
        else{
            Role.push(projDetails[i]);
            details.Role = Role;
        }
    }
    //  console.log(Name)
    // console.log(Role)

     console.log(details)
    
    
    

    

    

    return(

        <>
        <div className="project-details-card mt-5 ">
        <center>
        <div className="card">

        <h1> Project Name : <span className="heading-text">{projectname}</span></h1> <br/>
        <h4>Name : <span className="text">{details.Name}</span></h4>  
        <h4>Role : <span className="text">{details.Role}</span></h4>  <br/>
        </div>
        </center>
        </div>
        
      </>

    )
}

export default ProjectDetails