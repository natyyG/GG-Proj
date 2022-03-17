import React, {useState} from 'react'
import '../css/adminlogin.css'
import { Link } from 'react-router-dom'
function AdminLogin() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  console.log(password, user)
  let path=""
  
  const login = ()=>{
      if(user == 'admin' && password == 'password'){
         path="/admin"
      }else{
          path="/home"
      }
      <Link to="/admin"/>
  }
  login()
  return (
    <div className="formContainer">
        <form>
            <input className='textfield' type="text" placeholder='UserName' onChange={(e)=>{
                setUser(e.target.value);
            }}/><br/>
            <input className='passwordfield' type="text" placeholder="PassWord" onChange={(e)=>{
                setPassword(e.target.value);
            }}/><br/>
            <Link to={path}>
            <button onClick={login} className='loginbtn'>Login</button>
            </Link>
        </form>
    </div>
  )
}

export default AdminLogin