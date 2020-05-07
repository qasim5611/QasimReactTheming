import React, { Component } from 'react';
import { Row, Col , Container} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import logofooter from './images/157060807391255107.png';

import phone from './images/ic_call_end_white_18dp.png';
import email from './images/ic_email_white_18dp.png';
import add from './images/ic_location_on_white_18dp.png';




import fcb from './images/Icons-25-x-25-4.png';

import gplus from './images/Icons-25-x-25-6.png';
import pin from './images/Icons-25-x-25-7.png';

class Foote extends Component {
    render() {
        return (
            <div>
         

<Row style={{backgroundColor:"black", paddingTop:"40px", paddingRight:"100px" , paddingBottom:"100px" , paddingLeft: "100px", width: "100%" }}>
    <Col xs={12} sm={12} lg={3} md={3}>
        <center><img  src={logofooter} style={{height:"50px " , widtth: "100px"}} /></center>
       <center> <p>Video.React is a web video player built from the ground up for an HTML5 world using React library.</p></center>
       <Row>
           <Col xs={2} sm={2} lg={2} md={2}>
               <img src={phone} />
           </Col>
           <Col xs={10} sm={10} lg={10} md={10}>(+335) 6862429</Col>
       </Row>


       <Row>
           <Col xs={2} sm={2} lg={2} md={2}>
               <img src={email} />
           </Col>
           <Col xs={10} sm={10} lg={10} md={10}>qmuhammad144@gmail.com</Col>
       </Row>



       <Row>
           <Col xs={2} sm={2} lg={2} md={2}>
               <img src={add} />
           </Col>
           <Col xs={10} sm={10} lg={10} md={10}>IQBAL STADIUM ROAD</Col>
       </Row>


       <Row>
           <Col  xs={3} sm={3} lg={3} md={3}><center><img src={fcb} /></center></Col>
           <Col  xs={3} sm={3} lg={3} md={3}><center><img src={pin} /></center></Col>
           <Col  xs={3} sm={3} lg={3} md={3}><center><img src={fcb} /></center></Col>
           <Col  xs={3} sm={3} lg={3} md={3}><center><img src={gplus} /></center></Col>
          

       </Row>
    </Col>
    <Col xs={12} sm={12} lg={3} md={3}>
        <Row>
            <Col xs={12} sm={12} lg={12} md={12}>  <center style={{color:"white"}}>USEFULL LINKS</center></Col>
        </Row>
        <center> <hr style={{width: "20px", color:"white", backgroundColor:"white" }} /> </center>

        <Row>
            <Col xs={6} sm={6} lg={6} md={6}><center>AboutUs</center></Col>
            <Col xs={6} sm={6} lg={6} md={6}><center>Blog</center></Col>
        </Row>
        
        <Row>
            <Col xs={6} sm={6} lg={6} md={6}><center>Register</center></Col>
            <Col xs={6} sm={6} lg={6} md={6}><center>Update</center></Col>
        </Row>





        <Row>
            <Col xs={6} sm={6} lg={6} md={6}><center>AboutUs</center></Col>
            <Col xs={6} sm={6} lg={6} md={6}><center>Blog</center></Col>
        </Row>
        
        <Row>
            <Col xs={6} sm={6} lg={6} md={6}><center>Register</center></Col>
            <Col xs={6} sm={6} lg={6} md={6}><center>Update</center></Col>
        </Row>


        <Row>
            <Col xs={6} sm={6} lg={6} md={6}><center>AboutUs</center></Col>
            <Col xs={6} sm={6} lg={6} md={6}><center>Blog</center></Col>
        </Row>
        
        <Row>
            <Col xs={6} sm={6} lg={6} md={6}><center>Register</center></Col>
            <Col xs={6} sm={6} lg={6} md={6}><center>Update</center></Col>
        </Row>
        
    </Col>
    <Col xs={12} sm={12} lg={3} md={3}>
    <Row>
            <Col xs={12} sm={12} lg={12} md={12}>  <center style={{color:"white"}}>RECENT COURSES</center></Col>
        </Row>
        <center> <hr style={{width: "20px", color:"white", backgroundColor:"white" }} /> </center>

        <Row>
            <Col xs={12} sm={12} lg={12} md={12}><center>React</center></Col>
            
        </Row>
        <Row>
            <Col xs={12} sm={12} lg={12} md={12}><center>Node js</center></Col>
            
        </Row>

        <Row>
            <Col xs={12} sm={12} lg={12} md={12}><center>MongoDb</center></Col>
            
        </Row>


        <Row>
            <Col xs={12} sm={12} lg={12} md={12}><center>Docker</center></Col>
            
        </Row>
    </Col>
    <Col xs={12} sm={12} lg={3} md={3}>
    <Row>
            <Col xs={12} sm={12} lg={12} md={12}>  <center style={{color:"white"}}>SUBSCRIBE</center></Col>
        </Row>
        <center> <hr style={{width: "20px", color:"white", backgroundColor:"white" }} /> </center>



        <center> <p>Please note that only the latest stable version is tested and supported. Video-react may be usable in older releases, </p></center>
    
        <TextField id="outlined-basic" label="Enter Your Keywords" variant="outlined" style={{width: "100%", backgroundColor:"white" }} />

        <center><button style={{backgroundColor: "blue", color:"white" , padding: "10px"}}>SUBSCRIBE NOW</button></center>
    
    
    
    </Col>
</Row>







            </div>
        );
    }
}

export default Foote;