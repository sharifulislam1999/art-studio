import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { MyAuth } from "../Firebase/AuthProvier";

const Root = ()=>{
    const {user} = useContext(MyAuth)
    return(
        <div className="rokkitt">
        {user ? <></> : <Header></Header>}
        <div className="">
        <ScrollRestoration />
        <Outlet></Outlet>
        </div>
        <Footer/>
        </div>
    );
}
export default Root;