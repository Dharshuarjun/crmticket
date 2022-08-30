import React from 'react';
import {Form,Row,Col} from "react-bootstrap";
import PropTypes from "prop-types";

const Searchform = ({handleOnChange,str}) => {
    console.log(str);
  return (
    <div>
        <Form>
<Form.Group as={Row}>
    <Form.Label column sm="2">Search:{""}</Form.Label>
    <Col sm="9">
    <Form.Control name="Searchstr"
     onChange={handleOnChange}
     value={str}
      placeholder="Search...">

      </Form.Control>
    </Col>
</Form.Group>
        </Form>
    </div>
  )
}
Searchform.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    str:PropTypes.string.isRequired
}

export default Searchform