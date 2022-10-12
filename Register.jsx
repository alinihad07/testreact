import React, {useState} from "react";
import axios from"axios";
export const Register =(props) => {
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const [firstname,setFirstName] =useState('');
    const [name,setName] =useState('');
    const handleSubmit =(e) => 
    {
        e.preventDefault();
        //console.log(email);
        const title =e.target.title.value
        const lastname =e.target.lastname.value
        const email =e.target.email.value
        const password =e.target.password.value
        axios.post("https://api.oopacks.com/api/test/register",{title,lastname,email,password})
        .then((response) => { console.log(response);})
        .catch((error)=>{console.log(error);})
    
    };
return (
    <div className="form-container">
    <form className="Register-form" onSubmit={handleSubmit}>
        <label htmlFor="Full name"></label>
       
        <label htmlFor="email"></label>
       
        <label htmlFor="password"></label>
        <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="name" placeholder="FirstName" id="firstname" name="title" />
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="LastName" id="lasttname" name="lastname" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email/phonenumber" id="email" name="email" />
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Create a password" id="password" name="password" />
        <button type="submit">Sign Up</button>
    </form>
    <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already  have an account Login here.</button>
    </div>
)

}