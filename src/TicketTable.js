import React from 'react';
import {Table} from "react-bootstrap";
import PropTypes from"prop-types";
const TicketTable = ({tickets}) => {
    // if(!tickets.length)
  return (
   <Table striped bordered hover>
     <thead>
        <tr>
            <th>#</th>
            <th>subjects</th>
            <th>status</th>
            <th>openeddate</th>
        </tr>
     </thead>
     <tbody>
        {tickets.length ? (
             tickets.map((row)=>(
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                    
                    <a href={`/ticket/${row.id}`}>{row.subject}</a></td>
                 <td>{row.status}</td>
                  <td>{row.addedAt}</td>
            </tr>
        ))
        ):
          ( <tr>
            <td colSpan="4"className="text-center">No ticket show{""}</td>
        </tr>
        )
        }
       
       
     </tbody>
   </Table>
  )
}
TicketTable.propTypes={
    tickets:PropTypes.array.isRequired
};

export default TicketTable
