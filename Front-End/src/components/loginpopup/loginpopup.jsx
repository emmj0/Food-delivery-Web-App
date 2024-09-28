import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import axios from 'axios'
import './loginpopup.css'
import { StoreContext } from '../../context/Storecontext'
const loginpopup = ({setshowlogin}) => {

    const {url,settoken} = useContext(StoreContext)
    const [currentstate,setcurrentstate] = useState("SignUp");
    const [data, setdata] = useState({
      name: "",
      email: "",
      password: "",
    });
    const onchangehandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setdata(data=>({...data,[name]:value}))
    }
    const onLoign = async (event)=>{
      event.preventDefault();
      let newurl = url;
      if(currentstate === "Login"){
        newurl += '/api/user/login'
      }
      else{
        newurl += '/api/user/register'
      }
      const resopnse = await axios.post(newurl,data);
      if(resopnse.data.success){
        settoken(resopnse.data.token);
        localStorage.setItem("token",resopnse.data.token);
        setshowlogin(false);
        console.log(" login");
        
      }
      else{
        alert(resopnse.data.message)
        console.log("not login");
        

      }

    }
  return (
    <div className='login-popup'>
      <form onSubmit={onLoign} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentstate}</h2>
            <img onClick={()=>{
                setshowlogin(false)
            }} src={assets.cross_icon} alt="" />
        </div>
        <div className="input">
            {currentstate==="Login"?<></>:<input name='name' onChange={onchangehandler} value={data.name} type="text" placeholder="Username" required/>}
            <input name='email' onChange={onchangehandler} value={data.email} type="email" placeholder="Email" required/>
            <input name='password' onChange={onchangehandler} value={data.password} type="password" placeholder="Password" required/>
        </div>
        <button type='submit'>{currentstate === "SignUp"?"Create Account":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
        </div>
        {currentstate==="Login"?<p>Dont have an account <span onClick={()=>{
            setcurrentstate("SignUp")
        }}>Click here ?</span></p>:<p>Already have an account <span onClick={()=>{
            setcurrentstate("Login")
        }}>Login ?</span></p>}
        
        
      </form>
    </div>
  )
}

export default loginpopup
