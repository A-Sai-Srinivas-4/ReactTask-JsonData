import { useState, useEffect} from "react"
import Json from './../Json/JsonData.json'

 import './index.css'
 
 
 
 
 
 const EmployeeDetails =(props)=>{

    console.log(typeof(props.match.params.id))
    console.log(props)
    const {match} = props
    const {params} = match
    const {id} = params


    const  [data, setdata] = useState({});
    

    useEffect(() => {
        const data = Json.find((eachData) => String(eachData.id) === id);

        if (data) {
            setdata(data);
        }
    }, [id] )


    return(
        <div className="details_container">
        <img src={data.image_url} alt="" className="image"/>
        <h1 className="heading">NAME :- {data.Name}</h1>
        <h1 className="heading">ROLE :- {data.Role}</h1>
        <h1 className="heading">EXPERIENCE :- {data.Experience}</h1> 
        <div className="project_container">

        <div className="project1_container">
        <h1 className="heading">PROJECT-1 :- {data.Projects_Name}</h1>  
        <h1 className="heading">PROJECT-ROLE :- {data.Projects_Role}</h1> 
        <h1 className="heading">TECH-STACK :- {data.Projects_Tech_Stack}</h1> 
        <h1 className="heading">PROJECT-ALLOCATION :- {data.Projects_Allocation}</h1>
        </div>

        <div classNAme="project2_container" >
        <h1 className="heading">PROJECT-2 :- {data.Projects2_Name}</h1>
        <h1 className="heading">ROLE :- {data.Projects2_Role}</h1>
        <h1 className="heading">TECH-STACK :- {data.Projects2_Tech_Stack}</h1> 
        <h1 className="heading">PROJECT-ALLOCATION :- {data.Projects2_Allocation}</h1>
        </div>
        
        </div>
           
        </div>
    )
 }

 export default EmployeeDetails