import { useContext } from "react";
import Header from "../../Components/Header/Header";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import { MyAuth } from "../../Firebase/AuthProvier";
const Register = ()=>{
    const {user} = useContext(MyAuth)
    return (
        <>
         {user && <Header></Header>}
        <div className="container mx-auto px-3">
           <RegisterForm></RegisterForm>
        </div>
        </>
    );
}
export default Register;