import React,{ useState } from "react";
export const Forgotpass=(props) => {
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const {errorMessage}=props;
    const handleSubmit =(e) => {
        e.preventDefault();}

return(
    <div className="form-container">
    <form className="Forgotpass-form"onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your Email address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Enter New Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
        <button type="submit">Send Reset link</button>
    </form>
   
    </div>
)
}