import React from 'react';
import {Route,Redirect} from "react-router-dom";
import Layout from './Layout';

const isAuth=true;
const Privateroute = ({children,...rest}) => {
  return( 
    <Route 
    {...rest}
    render={()=>
    isAuth ?<Layout>{children}</Layout>:<Redirect 
    to="/"/>
}/>
  )
};
  


export default Privateroute