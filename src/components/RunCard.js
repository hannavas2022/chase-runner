import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
// import '../styles/applications.scss'
import { Link } from 'react-router-dom'
import '../App.scss'

const RunCard = ( {runs} ) => {

    console.log(runs)

    return (
        runs  ?
        <Container fluid style={{marginTop: "40px"}} >
            <Row className="application-row">
                <div className="application-col">Marathon Date</div>
                <div className="application-col">City</div>
                <div className="application-col">State</div>
                <div className="application-col">Country</div>
                <div className="application-col">Number of Marathons</div>
                <div className="application-col">Notes</div>
            </Row>
         
            {/* <Row className='application-row'> */}
                                <div className="application-col light-blue">{runs.run_date}</div>
                                {/* <div className="application-col light-blue">{run.company}</div>
                                <div className="application-col light-blue">{run.role}</div>
                                <div className="application-col light-blue">
                                    <Row>
                                        <Col><img className="contact-pic" src="https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_2.jpg" alt="contact"/></Col>
                                        <Col>{run.contact}</Col>
                                    </Row>
                                </div>
                                <div className="application-col light-blue">{run.interview_status}</div>   
                                <div className="application-col light-blue">{run.notes}</div>
            </Row>
             
            <div className="edit-btn">
                <Link to={`/applications/${run.id}/edit`}>Edit</Link>
            </div> */}
            {/* <div className="list-btn"> 
                <Link to="/profile">Go back to my applications</Link>
            </div> */}
        
        </Container> :
        <p> This is Your Card With No Application </p>
    )
    
}

export default RunCard;