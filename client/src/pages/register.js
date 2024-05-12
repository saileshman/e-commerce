//import { NavLink } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Register(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // clear the written after submit

  const handleClick = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(`${process.env.API}/api/v1/auth/register`,(name,email,password))
    } catch(error){
      alert.error("something is wrong")
    }
    console.log(name,email,password)
    alert("register successful !")
  }


    return <>
  <form className="row g-3 needs-validation" onSubmit={handleClick} noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Full name</label>
    <input type="text" className="form-control"  value={name}  onChange={(e)=> setName(e.target.value)} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Email</label>
    <input type="text" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password}  onChange={(e)=> setPassword(e.target.value)} />
    <label htmlFor="floatingPassword">Password</label>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  {/* <NavLink to="/login"> */}
    <button className="btn btn-primary" type="submit">Submit form</button>
    {/* </NavLink> */}
 
</form>


    </>
}

export default Register;