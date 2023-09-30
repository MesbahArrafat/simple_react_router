import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = ()=>{
  const users = useLoaderData();
  const usersStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat (3, 1fr)',
    gap:'10px'
  }
    return(
     <div style={usersStyle}>
      <h1>Users : {users.length}</h1>
      {
        users.map(user => <User key={user.id} user={user}></User>)
      }
       <h1>This is our user section</h1>
     </div>
    )
 }
 export default Users;