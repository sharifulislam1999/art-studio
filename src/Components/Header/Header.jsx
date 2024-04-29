import { Link, NavLink } from "react-router-dom";
import { handleTheme } from "../../Utils/ThemeToggle";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Header.css"
import { useContext, useState } from "react";
import { MyAuth } from "../../Firebase/AuthProvier";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
const Header = () => {
    const {user,loader} = useContext(MyAuth);
    const [profile,setProfile] = useState(false)
    const [menu,setMenu] = useState(false)
    const handleLogOut = ()=>{
        signOut(auth)
    }
    const handleProfile = ()=>{
        setProfile(!profile)
    }
   
    return (
        <div className="py-4 relative border-b">
           <div className="container mx-auto px-3">
            <div className="flex items-center justify-between">
                <div className="hidden md:block">
                    <Link to="/" className="lg:text-4xl text-[#0A7EF5] heading font-bold text-xl">Art Studio</Link>
                </div>
                <div className="md:hidden">
                    <div className="text-xl cursor-pointer" onClick={()=>setMenu(!menu)}>
                        {menu ? <FaBarsStaggered></FaBarsStaggered> :<FaBars></FaBars> }
                    
                    </div>
                </div>
                <div className="md:hidden text-center flex-1">
                <div >
                    <Link to="/" className="lg:text-4xl heading text-[#0A7EF5] font-bold text-xl">Art Studio</Link>
                </div>
                </div>
                <div className={`absolute md:w-auto ${menu ? 'left-2' : '-left-48'} duration-150 md:border-l-0 border-l-4 border-l-[#0A7EF5] top-16 bg-white md:bg-transparent z-20 text-left  md:static`}>
                    <ul className="px-2 md:px-0  flex-col md:flex-row flex text-base gap-2 md:gap-5 text-[#081722e]">
                        <li><NavLink onClick={()=>setMenu(!menu)} className={({isActive})=> isActive ? "active" : "pending"} to='/'>Home</NavLink></li>
                        <li><NavLink onClick={()=>setMenu(!menu)} className={({isActive})=> isActive ? "active" : "pending"} to='/allitems'>Art & Craft</NavLink></li>
                        <li><NavLink onClick={()=>setMenu(!menu)} className={({isActive})=> isActive ? "active" : "pending"} to='/additem'>Add Craft</NavLink></li>
                        <li><NavLink onClick={()=>setMenu(!menu)} className={({isActive})=> isActive ? "active" : "pending"} to='/mylist'>MyList</NavLink></li>
                    </ul>
                </div>              
                <div className="flex gap-2 md:gap-4   md:w-auto items-center justify-end">
                    {user ? 
                        <div className="relative">
                            <div>
                                <img onMouseEnter={handleProfile} className=" w-10 h-10 md:h-12 md:w-12 rounded-full inline-block border-2 cursor-pointer border-[#0A7EF5]" src={user.photoURL} alt="" />
                            </div>
                           {profile &&  <div onMouseLeave={handleProfile} className="absolute z-50 -bottom-[102px] -right-2 w-[200px] p-2 border bg-white rounded-xl">
                            <div className="space-y-4">
                                <h1 className="text-center md:text-xl font-bold">{user.displayName}</h1>
                                <button onClick={handleLogOut} className="py-1 md:py-2 w-full bg-[#0A7EF5] font-normal text-white rounded-lg">Log Out</button>
                               
                            </div>
                            </div>}
                        </div>
                    :  loader ? <div className="my-4 flex justify-center"><span className="loading loading-ring loading-sm"></span></div> :<div className="flex gap-3">
                    <Link to="/login" className="bg-[#0A7EF5] text-white px-4 py-1 rounded-lg text-base font-medium">LogIn</Link>
                    <Link to="/register" className="px-4 py-1 rounded-lg text-base bg-[#0A7EF5] text-white font-medium">Register</Link>  
                 </div>}
                     
                     <div className="flex">
                     <input type="checkbox" onChange={handleTheme} className="toggle toggle-md" />
                     </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Header;