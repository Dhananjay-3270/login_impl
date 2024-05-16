

import { useState } from 'react'
import './App.css'

function App() {
const creds ={username:"user",password:"password"}
const [data,setData] = useState({username:"",password:""})
const[islogin,setislogin] = useState(false);
const[isinvalid,setisinvalid] = useState(false);
const handlesubmit = ()=>{
 if((data.username.length>0) && (data.password.length>0))

  {
if((data.username === creds.username) && (data.password === creds.password))
  {
    setislogin(true);
  }
  else{
    setislogin(false);
    setisinvalid(true);
  }
  
  } 
  
}
const handlechange = (event)=>{
const{name,value} = event.target ;
setData((prevdata)=>({...prevdata ,[name]:value}))
  console.log(data);
}
  return (
    <>
    <h1>Login Page</h1>
    <h4>{isinvalid?"Invalid username or password":""}</h4>
    <div>
     { islogin ?("Welcome, user!"):<>
    <label  >Username:</label>
    <input type='text' onChange={handlechange} name='username' id='username' placeholder='username' required />
    <br/>
    <label>Password:</label>
    <input type='text'  onChange={handlechange} name='password' id='username' placeholder='password' required/>
  <br/>
<button onClick={handlesubmit}>Submit</button>
</>
}
</div>
    </>
  )
}

export default App
