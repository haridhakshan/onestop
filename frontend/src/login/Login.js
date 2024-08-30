import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



const Login = () => {
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
 const history = useHistory(); 
  return (
    <div className='login'>
    <div className='container'>
       <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
        <input type='password' placeholder='Password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required/>
        <FaLock className='icon'/>
        </div>
        <div className='remember'>
        <label>
        <input type='checkbox' />Remember me</label>
        <a href='#'>Forgot Password ?</a>
        </div>
        <button type='submit' onClick={()=> {history.push('/home')}} >Login</button>
        <div className='Register'>
          <p>Doesn't have an account? 
          <Link to='/register'>Register</Link>
          </p>
         
        </div>

       </form>
    </div>
    </div>
    
  )
}

export default Login