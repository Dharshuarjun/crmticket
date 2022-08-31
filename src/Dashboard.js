import React from 'react'
import {Container,Row,Col,Button} from "react-bootstrap";
import TicketTable from './TicketTable';
import tickets from "./dummy-tickets.json";
import PageBreadcrumb from "./Breadcrumb";


const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/></Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
                <a href="/add-ticket"><Button style={{fontSize:"2rem",padding:"10px 30px"}}>Add new ticket</Button></a>
                
            </Col>
        </Row>
        <Row>
            <Col className="text-center mb-2"><div>Total Tickets:50</div>
            <div>Pending Tickets:5</div>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-2"><div>Recently added Tickets</div>
            
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className="recent-ticket"><TicketTable tickets={tickets}/>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard