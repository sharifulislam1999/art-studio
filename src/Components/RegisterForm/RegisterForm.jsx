import { useContext, useRef, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import githubImg from '../../assets/icons/google.png'
import googleImg from '../../assets/icons/github.png'
import { MyAuth } from "../../Firebase/AuthProvier";
import auth from "../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from "firebase/auth";
const RegisterForm = () => {
    const {createUser,signPop} = useContext(MyAuth)
    const [eye,setEye] = useState(true);
    const passwordRef = useRef()
    const location = useLocation()
    const navigate = useNavigate();
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
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password)
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            errorMsg("Your password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.");
            return;
        }
        createUser(email,password)
        .then(()=>{
           updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
           })
           .then(()=>{
            successMsg("Registation Success")
            setTimeout(()=>{
                navigate(location.state ? location.state : "/") 
            },800)
           })
           .catch(()=>{
            // errorMsg("Registation Failed")
           })
        })
        .catch(error=>{
            if(error.code === "auth/email-already-in-use"){
                errorMsg("Already Use This Email")
            }
            
        })
    }
    const handleGoogleLogin = ()=>{
        const provider = new GoogleAuthProvider()
        signPop(provider)
        .then(()=>{
            successMsg("Registation Success");
            setTimeout(()=>{
                navigate(location.state ? location.state : "/") 
            },800)
        })
        .catch(()=>{
            // errorMsg("Registation Failed")
        })
       
    }
    const handleGithubLogin = ()=>{
        const provider = new GithubAuthProvider();
        signPop(provider)
        .then(()=>{
            successMsg("Registation Success");
            setTimeout(()=>{
                navigate(location.state ? location.state : "/") 
            },800)
        })
        .catch(()=>{
            // errorMsg("Registation Failed")
        })
    }
    return (
        <div className='w-full lg:w-[70%] mx-auto border mt-10 p-5 lg:p-10 rounded-2xl'>
            <form onSubmit={handleSubmit}>
                <div className='mb-10'>
                    <h1 className='text-5xl text-center font-bold text-[#0A7EF5] '>Register</h1>
                </div>
                <div>
                    <h1 className="text-base text-[#5e6064] mb-1">Name</h1>
                    <input name="name" className='border-l-4 p-1 focus:outline-none border-l-[#0A7EF5] border border-[#0a80f54e] text-[#9CA3AF] rounded-md w-full mb-4' placeholder='Enter Your Name' type="text" required />
                </div>
                <div>
                    <h1 className="text-base text-[#5e6064] mb-1">Email</h1>
                    <input name="email" className='border-l-4 p-1 focus:outline-none border-l-[#0A7EF5] border border-[#0a80f54e] text-[#9CA3AF] rounded-md w-full mb-4' placeholder='Enter Your Email' type="email" required />
                </div>
                <div>
                    <h1 className="text-base text-[#5e6064] mb-1">Photo</h1>
                    <input name="photo" className='border-l-4 p-1 focus:outline-none border-l-[#0A7EF5] border border-[#0a80f54e] text-[#9CA3AF] rounded-md w-full mb-4' placeholder='Enter Your Photo Url' type="url" required />
                </div>
                <div className="relative">
                <h1 className="text-base text-[#5e6064] mb-1">Password</h1>
                <input name="password" ref={passwordRef} className='border-l-4 p-1 focus:outline-none border-l-[#0A7EF5] border border-[#0a80f54e] text-[#9CA3AF] rounded-md w-full mb-4' placeholder='Enter Your password' type="password" required />
                <div className="absolute cursor-pointer right-0 top-7 m-2" onClick={handleEye}>
                   {eye ? <IoEyeOutline/> :  <IoEyeOffOutline/> }                  
                </div>
                </div>
                <div className="">
                    <input className='w-full bg-[#0A7EF5] text-white py-2 rounded-md cursor-pointer text-lg font-medium' type="submit" value="Register" />
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
                    <h1>Already Have an Account ? Please <Link to="/login" className="font-bold text-[#0A7EF5]">login</Link></h1>
                </div>
              </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RegisterForm;