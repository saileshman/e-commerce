import { NavLink } from "react-router-dom";


function Register(){


    return <>
  <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Full name</label>
    <input type="text" className="form-control"  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Email</label>
    <input type="text" className="form-control"  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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
  <NavLink to="/login">
    <button className="btn btn-primary" type="submit">Submit form</button>
    </NavLink>
 
</form>


    </>
}

export default Register;