import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Root = ()=>{
    return(
        <div className="rokkitt">
        <Header/>
        <div className="">
        <ScrollRestoration />
        <Outlet></Outlet>
        </div>
        <Footer/>
        </div>
    );
}
export default Root;