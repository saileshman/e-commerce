import {NavLink} from "react-router-dom";


const Footer = ()=>{

    return (
        <>
        <div className="footer" > 
        <h4 className="text-center">All Right Reserved &copy;</h4>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/category">privacy Policy</NavLink>
        

        </div>
        </>
    )
}

export default Footer;