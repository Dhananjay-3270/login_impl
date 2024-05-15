

import { useState } from 'react'
import './App.css'

function App() {
const creds ={Username:"user",Password:"password"}
const [data,setData] = useState({Username:"",Password:""})
const[islogin,setislogin] = useState(false);
const[isinvalid,setisinvalid] = useState(false);
const handlesubmit = ()=>{
 if(data.Username.length>0 && data.Password.length>0)

  {
if(data.Username ===creds.Username && data.Password === creds.Password)
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
const[name,value] = event.target ;
setData((prevdata)=>({...prevdata ,[name]:value}))
  
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
    <input type='text'  name='password' id='username' placeholder='password' required/>
  <br/>
<button onClick={handlesubmit}>Submit</button>
</>
}
</div>
    </>
  )
}

export default App
