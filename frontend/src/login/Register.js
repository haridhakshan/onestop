import React, { useState } from 'react'
import { FaLock, FaUser,FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import Propage from '../dashboard/Profile/Propage'

const Register = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail]=useState("")
    const[role,setrole]=useState("")
    const history = useHistory();
  return (
    <div className='login'>
    <div className='container'>
       <form action=''>
        <h1>Sign up</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Email' 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required/>
          <FaMailBulk className="icon" />
        </div>
        <div className='input-box'>
        <input type='password' placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
        <FaLock className='icon'/>
        </div>
        <div className='input-box1'>
       <h3 style={{marginLeft:"-20px"}}>Pick a Role </h3>
      <select role='selectrole' value={role} onChange={(e)=>setrole(e.target.value)}>
        <option></option>
        <option >Researcher</option>
        <option >Entrepreneur</option>
        <option >Researcher</option>
        <option >StartUp</option>
      </select>
        </div>
        <div className='remember'>
        <label>
        <input type='checkbox' />Remember me</label>
        <a href='#'>Forgot Password ?</a>
        </div>
        <button type='submit' onClick={()=> {history.push('/home')}}>Sign up</button>
        <div className='Register'>
          <p>Already have an account? <Link to='/'>Login</Link></p>
         
        </div>

       </form>
    </div>
    {/* <Propage name={username} gmail={email} password={password} role={role}/> */}
    </div>
  )
}

export default Register