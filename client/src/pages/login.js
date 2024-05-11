import Layout from "../components/layout";
import {NavLink} from "react-router-dom";


const Login = ()=>{



    return (
       <Layout>
     <div classname="login">
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <button className="btn btn-primary" type="submit">Login</button>
</div>
<NavLink to="/register" >Register</NavLink>

       </Layout>
    )
}

export default Login;