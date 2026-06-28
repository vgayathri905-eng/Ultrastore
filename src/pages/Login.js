import React, { useState } from 'react';
import { login } from '../Auth'; 
import "./Login.css"

const Login = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsucess]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const token = await login(username, password);
            console.log('Login successful, token:', token);
            alert('Login successful');
            setusername('')
            setpassword('')
            setsucess('Successfully Logged In')
            seterror('')
        }catch(err){
            console.log('Login Error',err)
            seterror('Logged In Failed')
            setsucess('')
        }
   }

  return (
     <center className='log'>
    <form onSubmit={handleSubmit}>
        <br/> <br/>
        <h1>LOGIN 🔐</h1><br/>
    <label><b>UserName</b></label><br/>
    <input
        type='text'
        name='name'
        value={username}
        onChange={(e)=>setusername(e.target.value)}/>

 <br></br><br></br>
 <label><b>Password</b></label><br/>
    <input
        type='password'
        name='password'
        value={password}
        onChange={(e)=>setpassword(e.target.value) }/>

<br></br><br></br>
    {/* <button type='submit'>Login</button> */}
      <button type="submit" class="btn btn-secondary">login</button>   
    {success && <p style={{color:"Green"}}>{success}</p>}
    {error && <p style={{color:'red'}}>{error}</p>}
     <br/> <br/> <br/>
</form>
</center>
  )
}

export default Login
