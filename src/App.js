import './App.css';
import React from "react";
import Layout from "./Layout";
// import Dashboard from './Dashboard';
import Addticketpage from './Addticketpage';
import Ticketlist from './Ticketlist';

function App() {
  return (
    <div className="App">
      {/* // <Firstpage/> */}
       
      <Layout>
        {/* <Dashboard/> */}
        {/* <Addticketpage/> */}
        <Ticketlist/>
        </Layout>
    </div>
  );
}


export default App;
