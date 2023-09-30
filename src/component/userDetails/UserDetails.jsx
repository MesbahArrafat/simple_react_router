import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = ()=>{
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name,email,phone} = user;
    const handleNavigate = ()=>{
        navigate(-1);
    }
    return(
     <div>
       <h1>User Name: {name}</h1>
       <h1>User Email : {email}</h1>
       <h1>User Phone : {phone}</h1>
       <button onClick={handleNavigate}>Go Back</button>
     </div>
    )
 }
 export default UserDetails;