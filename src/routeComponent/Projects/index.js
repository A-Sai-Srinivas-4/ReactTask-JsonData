
import Header from '../Header'
import Footer from './../Footer'
//import DeveloperData from './../DeveloperData'
import ProjectData from './../ProjectData'

import './index.css'

const Projects = () => (
  <>
    <Header />
    <div className="products-container">
    <h1 className="project-heading">Project-Details</h1>

    <ProjectData />
  </div>
    
    <Footer />
    
    
  </>
)

export default Projects