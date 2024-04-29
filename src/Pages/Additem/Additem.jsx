import { useContext } from "react";
import SimpleForm from "../../Components/Form/SimpleForm";
import { MyAuth } from "../../Firebase/AuthProvier";
import Header from "../../Components/Header/Header";

const Additem = ()=>{
    document.title="Add Item"
    const {user} = useContext(MyAuth)
    return (
       <>
        {user && <Header></Header>}
        <div className="container mx-auto px-3 mt-10">           
            <SimpleForm></SimpleForm>
        </div>
       </>
    );
}
export default Additem;