import React,{useEffect, useState} from 'react'
import {Container,Row,Col}from "react-bootstrap";
import PageBreadcrumb from './Breadcrumb';
import Ticketform from './Ticketform';
import {shortText}from "./Validation";

const initialvalues={
    subject:"",
    issueDate:"",
    details:"",
};
const initialvalError={
    subject:"false",
    issueDate:"false",
    details:"false"
}

const Addticketpage = () => {

    const [fmdata,setFmdata]=useState(initialvalues);
    const [fmdataError,setFmdataError]=useState(initialvalError);
    useEffect(() => {}, [fmdata,fmdataError]);

    const handleOnChange=(e)=>{
        const {name,value}=e.target;
       
        
        setFmdata({...fmdata,[name]:value,})
        // console.log(name,value)
    }
    const handleOnSubmit =async(e)=>{
        e.preventDefault();
        setFmdataError(initialvalError);
        
        const isSubjectValid= await shortText(fmdata.subject);

         setFmdataError({
            ...initialvalError,
            subject:!isSubjectValid,
        });
        console.log("Form submit request received",fmdata)
    };
  return (
    <Container>
        <Row>
            <Col><PageBreadcrumb page="New-Ticket"/>
            </Col>
        </Row>

        <Row>
            <Col><Ticketform handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            fmdata={fmdata}
            fmdataError={fmdataError}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Addticketpage