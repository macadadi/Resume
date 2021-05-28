import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import pic1 from './pic1.png'
import news from './news.png'
import shows from './shows.png'
import store from './store.png'
import './resumebody.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Resumebody() {
    return (
    
        <div className="resumebody">
    <Container >
        <Row>
            {/* profile section */}
        <Col md="6"  className="pic-div">
        <img src={pic1} alt='Photo images' />
        </Col>
        <Col   md="6">
            <div className="name-col">
                <h1>Marice Kidura</h1>
                <h4>Software Developer</h4>
                <div>
                    <LinkedInIcon />
                    yuu
                </div>
            </div>
        
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
        <Col md="12"style={{backgroundColor:'pink',height:'250px'}}>Contact</Col>
      </Row>
      <Row>
        <Col md="12"style={{backgroundColor:'blue',height:'250px'}}>Footer</Col>
      </Row>
      </Container>
        </div>
    )
}

export default Resumebody
