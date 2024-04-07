import React from 'react'
import './CSS/Login.css'
import { useState } from 'react'



const Login = () => {

  const validateEmail = (email) => {
    if (!email) {
      return false; // Return false for empty strings or null values
    }
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

  const validatePassword = (pass) => {
    if (!pass) {
      return false; // Return false for empty strings or null values
    }
    const re =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return re.test(pass);
    }

    const validateName = (pass) => {
      if (!pass) {
        return false; // Return false for empty strings or null values
      }
      const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      return re.test(pass);
      }

  const [state, setState] = useState("Login");
  const[data,setData]=useState({username:"",email:"",password:""}) 
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    // if (e.target.name === 'email') {
    //   if (!validateEmail(e.target.value)) {
    //     // Display an error message if the email is not valid
    //     console.log('Invalid email address');
    //   }
    //   else{
    //     console.log('Valid email address');
    //   }
    // }
    
  }

  const continueHandler = () => {

    if (!validateEmail(data.email)) {
      // Display an error message if the email is not valid for login
      console.log('Invalid email address');
      return;
    }
    if (!validatePassword(data.password)) {
      // Display an error message if the password is not valid for signup
      console.log('Invalid password');
      return;
    }
    if (!validateName(data.username)) {
      // Display an error message if the password is not valid for signup
      console.log('Invalid name');
      return;
    }

    if (state === "Login") {
      // If it's a login or the email is valid, proceed with login or signup
      login();}
    else {
      signup();
    }  
    
    
    
  }


  const login = async () => {
    
    console.log("login",data)
    let res;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {res=data});
      console.log(res);
      if (res.success) {
        localStorage.setItem('auth-token',res.token);
        window.location.replace("/");
      }
      else
      {
        alert(res.errors)
      }
  }

  const  signup= async ()=>{
    console.log("signup",data)
    let res;
    await fetch('http://localhost:4000/signup',
    {method:"POST",
    headers: {
      Accept: 'application/signup-data',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),

  }).then((response) => response.json()).then((data) => res=data)
  if (res.success){
    console.log("success")
    localStorage.setItem("auth-token",res.token)
    window.location.replace("/")

  }
  else{
    alert(res.errors);
  }
}

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={data.username} onChange={changeHandler} type='text' placeholder='Your Name' />:<></>}
          <input name='email' value={data.email} onChange={changeHandler} type='email' placeholder='Email Address'></input>
          <input name='password' value={data.password} onChange={changeHandler} type='password' placeholder='Password'></input>
        </div>
        {/* <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button> */}
        <button onClick={continueHandler}>Continue</button>
        

        {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>
        :<p className="loginsignup-login">Create an account <span onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>}
        
        
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login