import React from 'react'
import {Container,Row,Col}from "react-bootstrap";
import PageBreadcrumb from './Breadcrumb';
import Ticketform from './Ticketform';

const Addticketpage = () => {
  return (
    <Container>
        <Row>
            <Col><PageBreadcrumb page="New-Ticket"/>
            </Col>
        </Row>

        <Row>
            <Col><Ticketform/>
            </Col>
        </Row>
    </Container>
  )
}

export default Addticketpage