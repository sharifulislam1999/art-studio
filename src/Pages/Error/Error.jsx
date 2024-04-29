import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Error = ()=>{
    document.title = "404 Not Found"
    return (
        <div>
            <Header/>            
            <div className='container mx-auto py-20 lg:py-32 px-3'>
            <div className='text-center text-2xl lg:text-5xl space-y-6'>
                <h1>4O4</h1>
                <span className='block'>Page Not Found</span>
                <Link to="/" className='btn bg-[#0A7EF5] text-white'>Back to Home</Link>
            </div>           
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Error;