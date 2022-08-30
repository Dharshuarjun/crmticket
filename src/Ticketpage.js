import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button} from "react-bootstrap";
import PageBreadcrumb from "./Breadcrumb";
import tickets from "./dummy-tickets.json"
import Messagehistory from './Messagehistory';
import UpdateTicket from './UpdateTicket';

const ticket=tickets[0]
function Ticketpage(){
    const [message, setMessage] = useState("");
    useEffect(() => {
     
    }, [message])
    
    const handleOnChange = (e) => {
        setMessage(e.target.value);
      };
      const handleOnSubmit=()=>{
        alert("reply submitted")
    }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className="text-weight-bolder text-secondary">
            <div className="subject">Subject:{ticket.subject}</div>
            <div className="date">Ticket Opened:{ticket.addedAt}</div>
            <div className="status">Status:{ticket.status}</div>
            </Col>
            <Col className="text-right">
            <Button variant="outline-info">close Ticket</Button>
            </Col>
        </Row>
        <Row className="mt-4">
        <Col>
        <Messagehistory msg={ticket.history}/>
        </Col>
        </Row>
        <hr/>
        <Row className="mt-4">
        <Col>
        <UpdateTicket msg={message} 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}/>
        </Col>
        </Row>
       
    </Container>
  )
}

export default Ticketpage