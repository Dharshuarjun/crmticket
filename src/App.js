import './App.css';
import React from "react";
import Layout from "./Layout";
// import Dashboard from './Dashboard';
import Addticketpage from './Addticketpage';
import Ticketlist from './Ticketlist';
import Ticketpage from "./Ticketpage";

function App() {
  return (
    <div className="App">
      {/* // <Firstpage/> */}
       
      <Layout>
        {/* <Dashboard/> */}
        {/* <Addticketpage/> */}
        {/* <Ticketlist/> */}
        <Ticketpage/>
        </Layout>
    </div>
  );
}


export default App;
