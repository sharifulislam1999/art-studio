import { useContext } from "react";
import UpdateForm from "../../Components/UpdataForm/UpdateForm";
import { MyAuth } from "../../Firebase/AuthProvier";
import Header from "../../Components/Header/Header";

const Update = ()=>{
    document.title="Update"
    const {user} = useContext(MyAuth)
    return (
      <>
       {user && <Header></Header>}
        <div className="container mx-auto px-3">
            <UpdateForm></UpdateForm>            
        </div>
      </>
    );
}
export default Update;