import { useState, useEffect} from "react"
//import Json from './../Json/JsonData.json'
import OldJson from './../OldJson/jsonData.json'
import DeveloperData from "../DeveloperData"
import Footer from './../Footer'

 import './index.css'
 
 const EmployeeDetails =(props)=>{

    console.log(typeof(props.match.params.id))
    console.log(props)
    const {match} = props
    const {params} = match
    const {id} = params


    const  [data, setdata] = useState([]);

    const [projectData, setProjectData] = useState([]);
    console.log(projectData)
    

    useEffect(() => {
        const data = OldJson.find((eachData) => String(eachData.id) === id);

        if (data) {
            setdata(data);
            setProjectData(data.Projects)
        }
    }, [id] )


    return(
        <>
        <div className="details_container">


        <div className="top_details">
        <img src={data.image_url} alt="" className="images"/>
        <div className="cards">
        <h1 className="heading">NAME  :-  <span>{data.Name}</span></h1>
        <h1 className="heading">ROLE  :-  <span>{data.Role}</span></h1>
        <h1 className="heading">EXPERIENCE  :-  <span>{data.Experience}</span></h1>
        </div> 
        </div>
 
        {
            projectData.map(eachItems=>{
              return (
                <div className="project_container">  
                <h1 className="heading">{`PROJECTS : ${eachItems.Name}`}</h1>
                <h1 className="heading">{`Role : ${eachItems.Role}`}</h1>
                <h1 className="heading">{`Teck_Stack : ${eachItems.Tech_Stack}`}</h1>
                <h1 className="heading">{`Allocation : ${eachItems.Allocation}`}</h1>  
                <hr />   
                </div>
              )
            })
          }

        </div>
        <DeveloperData />
        <Footer />

        </>
           
    )
 }
 export default EmployeeDetails

