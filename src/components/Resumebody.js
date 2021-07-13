import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import pic1 from './pic1.png'
import news from './news.png'
import shows from './shows.png'
import store from './store.png'
import './resumebody.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Resumebody() {
    return (
    
        <div className="resumebody">
    <Container >
            {/* profile section */}
        <Row className="profile-wrap" >
        
        <Col md="4"className = 'profile-general' >
          
        <img src={pic1} alt='profile-pic' />
        </Col>
        <Col  md="4">
                 <diV className="profile-name">
                     <div>
                <h1>Maricus Adadi</h1>
                <h4>Software Developer</h4>
                <div>   
                <a href="https://www.linkedin.com/in/maricus-adadi-93b32a10b" target="_blank" rel="noopener noreferrer">
                      <button ><LinkedInIcon color="primary" fontSize="large"/></button></a>
                <a href="https://github.com/macadadi" target="_blank" rel="noopener noreferrer">
                <button ><GitHubIcon color="primary" fontSize="large"/></button></a>
                
                  
                </div>
                </div>
                </diV>
          

        </Col>
      </Row>
      <Row className="skills-sectionl">
        <Col md="6" >
            {/*about me section */}
            <center>
            <h1>About Me</h1></center>
            <p> &nbsp; &nbsp; Hello! My name is Maricus, an enthusiastic software developer with outstanding skills in
                 front-end development and a vast knowledge in IT. Am experienced in React and Redux ,currently 
                 learning django with a long term goal of undertaking a career in data science and analysis.
                   </p>
        </Col>
        {/*skills section */}
        <Col md="6"style={{height:'250px'}}> <center> <h1>Skills</h1>  </center>

       <div className="skills-lu">
           <div> <h4>React</h4> <h4>Django</h4> </div> <div><h4>Bootstrap</h4>
            <h4>Redux</h4> </div> <div><h4>Javascript</h4>   <h4>Python</h4> </div> <div><h4>Material ui</h4>
            <h4>Laravel</h4>
          </div></div>
      
        
        
        </Col>
      </Row>
      <Row>
          <Col>
             {/*projects section */}
          <center><h1>Projects</h1></center> </Col>
      </Row>
      <Row className="projects-section  ">
       
        <Col md="4" className='b-shad'> <img src={shows} alt='Shows images' />
       <div className="project-links">  <h4>Prime shows</h4>
        <a href="https://primeshow-9de5f.web.app/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/macadadi/netflix-clone" target="_blank" rel="noopener noreferrer">Github</a></div>
        </Col>
        <Col md="4" className='b-shad'> <img src={store} alt='store images' />
        <div className="project-links">  <h4>Online Store</h4>
        <a href="https://onlinestore-bca9f.web.app/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/macadadi/Onlinestore" target="_blank" rel="noopener noreferrer">Github</a></div>
        </Col>
        <Col md="4" className='b-shad'> <img src={news} alt='news images' />
        <div className="project-links">  <h4>Newsline</h4>
        <a href="https://newsline-57c20.web.app/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/macadadi/Newsweb" target="_blank" rel="noopener noreferrer">Github</a></div>
        </Col>
        <Col md="4" className='b-shad'> <img src={news} alt='news images' />
        <div className="project-links">  <h4>Fullstack E-shop</h4><p>(in development)</p>
        <a href="https://restaurant-c6a07.web.app/" target="_blank" rel="noopener noreferrer">Demo</a>
        <a href="https://github.com/macadadi/restaurantlandingpage" target="_blank" rel="noopener noreferrer">Github</a></div>
        </Col>
      </Row>
      <Row>
          {/*contact section */}
        <Col md="12">
     <center>   <h3>Contact info:</h3></center>
            <div className="contact-outer-div">
              
                {/* <div className="contact-icons">
                   <div> <EmailIcon color="primary" fontSize="large"/></div>
                   <div><PhoneIcon color="primary" fontSize="large" /></div>
                   <div> <LocationOnIcon color='primary' fontSize="large" /></div>
                    
                </div>
                <div className="contact-def">
                    <h4>Email</h4>
                    <h4>Phone</h4>
                    <h4>Location</h4>
                </div>
                <div className="contact-info">
                    <p>macadadi36@gmail</p>
                    <p>(254) 710770278</p>
                    <p> Nairobi,kenya</p>

                </div> */}
      
      {/*contact informaation section */}
                <table className="t-data">
                    <tbody>
                        <tr>
                            <td >
                            <EmailIcon className="icon" fontSize="mediam"/>
                            </td>
                            <td>
                            Email
                            </td>
                            <td>
                            macadadi36@gmail
                            </td>
                        </tr>
                        <tr>
                            <td >
                            <PhoneIcon  fontSize="medium" />
                            </td>
                            <td>
                            Phone
                            </td>
                            <td>
                            (254) 710770278
                            </td>
                        </tr>
                        <tr>
                            <td >
                            <LocationOnIcon  fontSize="medium" />
                            </td>
                            <td>
                            Country
                            </td>
                            <td>
                            Nairobi,Kenya
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Col>
      </Row>
      {/*footer */}
      <Row className="footer">
        <Col md="12"><center><h6> macadadi &copy; 2021</h6></center></Col>
      </Row>
      </Container>
        </div>
    )
}

export default Resumebody
