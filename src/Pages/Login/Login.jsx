import { useContext } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { MyAuth } from "../../Firebase/AuthProvier";
import Header from "../../Components/Header/Header";
const Login = ()=>{
    const {user} = useContext(MyAuth)
    return (
       <>
       {user && <Header></Header>}
        <div className="container mx-auto px-3 mt-10">
            <LoginForm></LoginForm>
        </div>
       </>
    );
}
export default Login;