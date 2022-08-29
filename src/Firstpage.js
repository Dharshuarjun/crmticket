import React,{useState} from 'react';
import App from './App.css';
import Loginpage from './Loginpage';
import Resetpassword from "./Passwordreset";


const Firstpage = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[fromload,setFromload]=useState("login")

    const handleOnChange=e=>{
        const {name,value}=e.target;
        switch(name){
            case "email":
                setEmail(value)
                break;
                case "password":
                    setPassword(value)
                    break;
                    default:
                        break;
        }
console.log(name,value);
       
      
    };
    const handleOnSubmit=e=>{
        e.preventDefault()
        if(!email || !password){
           return alert("Fill up the form");
        }
        //todo api call
        console.log(email,password);
    }
    const handleOnResetSubmit=e=>{
        e.preventDefault()
        if(!email){
           return alert("Please enter the email");
        }
        //todo api call
        console.log(email);
    }
    const formRouter =(formType)=>{
        setFromload(formType);
    }
  return (
    <div className="first-page bg-info">
        <div className="form-box bg-white p-2">
            {fromload ==="login" && <Loginpage 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formRouter={formRouter}
        email={email}
        pass={password}/>}
        {fromload ==="reset" &&  <Resetpassword 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formRouter={formRouter}
        email={email}
        /> }
       
        </div>
    </div>
    
  )
}

export default Firstpage