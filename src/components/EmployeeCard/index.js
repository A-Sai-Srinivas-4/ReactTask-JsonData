
import {Link} from 'react-router-dom'
import './index.css'




const EmployeeCard = (props) => {
        const {cardDetails} = props
        const {id,Name,Role,image_url,Projects_Name} = cardDetails

        return(
        <Link to={`/lovaraju/${id}`} >

        <li className="card-item"  >
        <img src={image_url} alt="imagess" className="image"/>
        <h1 className="heading">{Name}</h1>
        <h1 className="discription">{Role}</h1>
        <h2 classNAme="paragraph">{Projects_Name}</h2>

        
        </li>
        </Link>

        )
    }


export default EmployeeCard