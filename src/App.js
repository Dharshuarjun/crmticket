import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import Firstpage from './Firstpage';
import Layout from "./Layout";
import Dashboard from './Dashboard';
import Addticketpage from './Addticketpage';
import Ticketlist from './Ticketlist';
import Ticketpage from "./Ticketpage";
import Privateroute from './Privateroute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>            
       
        <Route exact path="/">
          <Firstpage/>
          </Route>
         
          {/* <Layout> */}
          <Privateroute path="/dashboard"><Dashboard/></Privateroute>
          <Privateroute path="/add-ticket"><Addticketpage/></Privateroute>
          <Privateroute path="/tickets"><Ticketlist/></Privateroute>
          <Privateroute path="/ticket/:tId"> <Ticketpage/></Privateroute>
       {/* </Layout> */}
      
      
      </BrowserRouter>
       
    </div>
  );
}


export default App;
//