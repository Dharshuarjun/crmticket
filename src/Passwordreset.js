import React from 'react';
import PropTypes from 'prop-types'; 
import {Container,Row,Col,Form,Button} from "react-bootstrap";

const Resetpassword = ({handleOnChange,handleOnResetSubmit,formRouter,email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1>Password Reset</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
               
                <Button type="Submit"className="form-control d-flex justify-content-center p-2 m-2 ms-0">Reset Password</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col><a href="#!"onClick={()=>formRouter("login")}>Login Now</a></Col>
        </Row>
    </Container>
  )
}
Resetpassword.propTypes={

    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formRouter:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired
}
export default Resetpassword