import React from 'react';
import {Form,Row,Col,Button} from "react-bootstrap";

const Ticketform = ({handleOnSubmit,handleOnChange}) => {
  return (
    <div><Form autoComplete="off" onSubmit={handleOnSubmit}>
    <Form.Group as={Row}>
        <Form.Label column sm={3}>Subject</Form.Label>
        <Col sm={9}>
        <Form.Control 
         type="email"
         name="subject"
        //  value={email}
         onChange={handleOnChange}
         placeholder="Subject">
           
        </Form.Control></Col>
    </Form.Group>
    <Form.Group as={Row}>
        <Form.Label column sm={3}>IssueFound</Form.Label>
        <Col sm={9}>
        <Form.Control 
         type="date"
         name="issueDate"
        //  value={pass}
         onChange={handleOnChange}
         placeholder="Enter password">
           
        </Form.Control></Col>
       
    </Form.Group>
    <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control 
         as="textarea"
         name="details"
         rows="5"
        //  value={pass}
         onChange={handleOnChange}
         placeholder="Enter password">
           
        </Form.Control>
    </Form.Group>
    <Button type="Submit" variant="info" block>Login</Button>
</Form></div>
  )
}

export default Ticketform