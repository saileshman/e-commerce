import {NavLink} from "react-router-dom";


const Navbar = ()=>{

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
     <ul>
       <li>
          <NavLink to="/" class="nav-link active" aria-current="page" href="#">Home</NavLink >
        </li>
      
        <li class="nav-item">
          <NavLink to="/about" class="nav-link disabled" aria-disabled="true">about us</NavLink >
        </li>
        <li class="nav-item">
          <NavLink to="/login" class="nav-link disabled" aria-disabled="true">login</NavLink >
        </li>
        <li class="nav-item">
          <NavLink  class="nav-link disabled" aria-disabled="true">signin</NavLink >
        </li>
        <li class="nav-item">
          <NavLink  class="nav-link disabled" aria-disabled="true">cart</NavLink >
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;