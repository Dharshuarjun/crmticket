import React from 'react';
import {Form,Row,Col,Button} from "react-bootstrap";
import propTypes from "prop-types";

const Ticketform = ({handleOnSubmit,handleOnChange,fmdata,fmdataError}) => {
    console.log(fmdata)
  return (
    <div className="mt-3 add_newticket">
        <h1 className="text-center p-3">Add New ticket</h1>
        <hr/>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
    <Form.Group as={Row}>
        <Form.Label column sm={3}>Subject</Form.Label>
        <Col sm={9}>
        <Form.Control 
        name="subject"
        //  minLength={3}
         maxLength={100}
         value={fmdata.subject}
         onChange={handleOnChange}
         placeholder="Subject"required>
           
        </Form.Control>
        <Form.Text className="text-danger">{!fmdataError.subject && "Subject is Required"}</Form.Text>
        </Col>
    </Form.Group>
    <Form.Group as={Row}>
        <Form.Label column sm={3}>IssueFound</Form.Label>
        <Col sm={9}>
        <Form.Control 
         type="date"
         name="issueDate"
         value={fmdata.issueDate}
         onChange={handleOnChange}
         placeholder="Enter password"required>
           
        </Form.Control></Col>
       
    </Form.Group>
    <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control 
         as="textarea"
         name="detail"
         rows="5"
        //  value={pass}
         onChange={handleOnChange}
         placeholder="Enter password">
           
        </Form.Control>
    </Form.Group>
    <Button type="Submit" variant="info" block>Submit</Button>
</Form></div>
  )
}
Ticketform.propTypes={
    handleOnSubmit:propTypes.func.isRequired,
    handleOnChange:propTypes.func.isRequired,
    fmdata:propTypes.object.isRequired,
    fmdataError:propTypes.object.isRequired
}
export default Ticketform