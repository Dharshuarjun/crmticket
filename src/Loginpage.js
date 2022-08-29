import React from 'react';
import PropTypes from 'prop-types'; 
import {Container,Row,Col,Form,Button} from "react-bootstrap";

const Loginpage = ({handleOnChange,handleOnSubmit,formRouter,email,pass}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1>Client Login</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleOnChange}
                     placeholder="Enter Email">
                       
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                     type="password"
                     name="password"
                     value={pass}
                     onChange={handleOnChange}
                     placeholder="Enter password">
                       
                    </Form.Control>
                </Form.Group>
                <Button type="Submit"className="form-control d-flex justify-content-center p-2 m-2 ms-0">Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col><a href="#"onClick={()=>formRouter("reset")}>Forgot Password</a></Col>
        </Row>
    </Container>
  )
}
Loginpage.propTypes={

    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formRouter:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
}
export default Loginpage