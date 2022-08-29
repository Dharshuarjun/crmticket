import './App.css';
import React from "react";
import Layout from "./Layout";
// import Dashboard from './Dashboard';
import Addticketpage from './Addticketpage';

function App() {
  return (
    <div className="App">
      {/* // <Firstpage/> */}
       
      <Layout>
        {/* <Dashboard/> */}
        <Addticketpage/>
        </Layout>
    </div>
  );
}


export default App;
