import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
    
        <div className="layout">
<div className="header mb-2">
<Header/>
</div>
<div className="main">
{children}
</div>
<div className="footer">
<Footer/>
</div>     
      
       
       
        </div>
  )
}

export default Layout