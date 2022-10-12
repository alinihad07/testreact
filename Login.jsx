import React,{ useState } from "react";
import axios from"axios";
export const Login=(props) => {
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const {errorMessage}=props;

    const handleSubmit =(e) => {
        e.preventDefault();
        const email =e.target.email.value
       
        const password =e.target.password.value
        axios.post("https://api.oopacks.com/api/test/login",{email,password})
        .then((response) => { console.log(response);})
        .catch((error)=>{console.log(error);})

    }
    return (
        <div className="form-container">
            <form className="Login-form"onSubmit={handleSubmit}>
                {/* <label htmlFor="email">Email</label> */}
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                {/* <label htmlFor="password">Password</label> */}
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button className="forgot-link-btn" onClick={() =>props.onFormSwitch('Forgotpass')}>Forgot password</button>
                <button type="submit">Log in</button>
            </form>
            <span>{errorMessage}</span>
            <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account Signup here.</button>
            </div>
    )
    
    }