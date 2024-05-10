import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children})=>{

    return(
        <>
        <div> <Navbar/></div>
        <main style = {{minHeight: "89vh"}}> {children} </main>
        <Footer/>
        </>
    )
}
export default Layout;