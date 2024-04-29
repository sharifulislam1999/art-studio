import { useContext, useRef, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import githubImg from '../../assets/icons/google.png'
import googleImg from '../../assets/icons/github.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyAuth } from './../../Firebase/AuthProvier';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const LoginForm = () => {
    const {logInWithPassword,signPop} = useContext(MyAuth)
    const [eye,setEye] = useState(true);
    const location = useLocation()
    const navigate = useNavigate();
    const passwordRef = useRef()
    const handleEye = ()=>{
        if(eye){
            passwordRef.current.type="text"
        }else{
            passwordRef.current.type="password"
        }
        setEye(!eye);
    }
    const errorMsg = (msg)=>{
        toast.error(msg)
    }
    const successMsg = (msg)=>{
        toast.success(msg)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            errorMsg("Your password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.");
            return;
        }
        logInWithPassword(email,password)
        .then((user)=>{
            successMsg("Login Success")
            setTimeout(()=>{
                navigate(location.state ? location.state : "/")
            },300)
            console.log(user)
        })
        .catch((error)=>{
            if(error.code === "auth/invalid-credential"){
                errorMsg("Invaild Email or Password")
            }
        })
        console.log(email,password);

    }
    const handleGoogleLogin = () =>{
        const provider = new GoogleAuthProvider();
        signPop(provider)
        .then(()=>{
            successMsg("Log In Success")
            setTimeout(()=>{
                navigate(location.state ? location.state : "/")
            },300)
        })
        .catch(()=>{
            errorMsg("Log in Faild")
        })
    }
    const handleGithubLogin = () =>{
        const provider = new GithubAuthProvider();
        signPop(provider)
        .then(()=>{
            successMsg("Log In Success")
        })
        .catch(()=>{
            errorMsg("Log in Faild")
        })
    }
    return (
        <div className='w-full lg:w-[70%] mx-auto border p-5 lg:p-10 rounded-2xl'>
            <form onSubmit={handleSubmit}>
                <div className='mb-10'>
                    <h1 className='text-5xl text-center font-bold text-[#0A7EF5] '>Login</h1>
                </div>
                <div>
                    <h1 className="text-base text-[#5e6064] mb-1">Email</h1>
                    <input name="email" className='border-l-4 p-1 focus:outline-none border-l-[#0A7EF5] border border-[#0a80f54e] text-[#9CA3AF] rounded-md w-full mb-4' placeholder='Enter Your Email' type="email" required />
                </div>
                <div className="relative">
                <h1 className="text-base text-[#5e6064] mb-1">Password</h1>
                <input name="password" ref={passwordRef} className='border-l-4 p-1 focus:outline-none border-l-[#0A7EF5] border border-[#0a80f54e] text-[#9CA3AF] rounded-md w-full mb-4' placeholder='Enter Your password' type="password" required />
                <div className="absolute cursor-pointer right-0 top-7 m-2" onClick={handleEye}>
                   {eye ? <IoEyeOutline/> :  <IoEyeOffOutline/> }                  
                </div>
                </div>
                <div className="">
                    <input className='w-full bg-[#0A7EF5] text-white py-2 rounded-md cursor-pointer text-lg font-medium' type="submit" value="Login" />
                </div>
            </form>
            <div className="flex justify-center mt-4">
              <div className="space-y-3">
              <div className="text-center text-xl font-semibold">
                    <h1>Log in With</h1>
                </div>
                <div className="flex justify-center">
                <div className="flex">
                    <div>
                    <img onClick={handleGoogleLogin} className="w-10 cursor-pointer" src={googleImg} alt="" />
                    </div>
                    <div>
                    <img onClick={handleGithubLogin} className="w-10 cursor-pointer" src={githubImg} alt="" />
                    </div>
                </div>
                </div>
                <div>
                    <h1>Don`t Have an Account ? Please <Link to="/register" className="font-bold text-[#0A7EF5]">Register</Link></h1>
                </div>
              </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default LoginForm;