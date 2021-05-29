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

function Resumebody() {
    return (
    
        <div className="resumebody">
    <Container >
            {/* profile section */}
        <Row className="profile-wrap">
        
        <Col md="4"className = 'profile-general' >
          
        <img src={pic1} alt='Photo images' />
        </Col>
        <Col  md="4">
                 <diV className="profile-name">
                <h1>Marice Kidura</h1>
                <h4>Software Developer</h4>
                <div>
                    <LinkedInIcon />
                </div>
                </diV>
          

        </Col>
      </Row>
      <Row>
        <Col md="6">
            {/*about me section */}
            <center>
            <h1>About Me</h1></center>
            <p>Hello ! My name is Maurice ,some people call me Comrade coz am lost in this 
                jungle of Nairobi.Am deeply in love with Nancy Muthoni that i onced cried when she pranked 
                me that we were breaking up !!</p>
        </Col>
        {/*skills section */}
        <Col md="6"style={{height:'250px'}}> <center> <h1>Skills</h1>  </center>

       <div className="skills-lu">
           <div> <h4>React</h4> <h4>Django</h4> </div> <div><h4>Bootstrap</h4>
            <h4>Redux</h4> </div> <div><h4>Javascript</h4>   <h4>Python</h4> </div> <div><h4>Material ui</h4>
           <h4>Mongo DB</h4></div></div>
      
        
        
        </Col>
      </Row>
      <Row>
          <Col>
             {/*projects section */}
          <center><h1>Projects</h1></center> </Col>
      </Row>
      <Row className="projects-section">
       
        <Col md="4"style={{height:'250px'}}> <img src={shows} alt='Shows images' />
        <h4>Prime shows</h4></Col>
        <Col md="4"style={{height:'250px'}}> <img src={store} alt='store images' />
        <h4>Online Store</h4></Col>
        <Col md="4"style={{height:'250px'}}> <img src={news} alt='news images' />
        <h4>News website</h4></Col>
       
      </Row>
      <Row>
          {/*contact section */}
        <Col md="12"style={{height:'250px'}}>
            <div className="contact-outer-div">
                <div className="contact-icons">
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

                </div>

            </div>
        </Col>
      </Row>
      <Row>
        <Col md="12"><center><h6> macadadi &copy; 2021</h6></center></Col>
      </Row>
      </Container>
        </div>
    )
}

export default Resumebody
