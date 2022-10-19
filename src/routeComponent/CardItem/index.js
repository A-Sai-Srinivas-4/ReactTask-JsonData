import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./index.css"
import Data from "../../data.json"
import ProjectDetails from '../ProjectDetails';

const CardItem = ({details}) => {  
    
  const projectName = details
 
  const myArray = []

  const fetchData = () => {
    
    const dataObj = Data.map(each => each.Projects.map(e => e.Name === projectName && [myArray.push(each.Name) && myArray.push(each.Role )]))
      return myArray
}



  const projDetails = fetchData() 
   console.log(details)
  console.log(projDetails)
 

  
  return (
    <>
    
    <Link to={`/project_details/${projectName}/${projDetails}`}  >
    <div key={uuidv4()} className="mt-5" >
    <Card style={{ width: '16rem', padding:'10px'  }}>
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
      </Card.Body>
      
    </Card>
    </div>
    </Link>
    </>
    
  )
}

export default CardItem
