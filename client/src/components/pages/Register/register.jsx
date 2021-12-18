import { useState } from "react"
import "./register.css"

export default function Register() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  var res;

  const handleSubmit = async (event) => {
      res =""
      event.preventDefault();
      try{
        res = await fetch("/auth/register",{
          method:"POST",
          body: JSON.stringify({
            username:username,
            password:password,
            email:email
          }), headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
      }catch(err){
        res = err
      }
  }

    return (
    <>
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={event=>setUsername(event.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." onChange={event=>setEmail(event.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={event=>setPassword(event.target.value)}/>
        <button className="registerButton" type='submit'>Register</button>
        <span style={{marginTop:"10px"}}> {res ? res: ""}</span>
      </form>
         </div>
    </>
    )
}