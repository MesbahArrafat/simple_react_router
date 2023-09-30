import { Link } from "react-router-dom";

const User = ({user})=>{
    const {id,name,email,phone} = user;
    const userStyle = {
        border : '2px solid purple',
        padding : '10px',
        borderRadious : '20px'
    }
    return(
     <div style={userStyle}>
       <h3>Name : {name}</h3>
       <p>Email : {email}</p>
       <p>Phone : {phone}</p>
       <Link to={`/user/${id}`}>Show Details</Link>
     </div>
    )
 }
 export default User;