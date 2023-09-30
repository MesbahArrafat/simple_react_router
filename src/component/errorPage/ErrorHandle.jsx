import { Link, useRouteError } from "react-router-dom";

const ErrorHandle = ()=>{
    const errors = useRouteError();
    console.log(errors);
    return(
     <div>
       <h2>Opps!!</h2>
       <p>{errors.data}</p>
       <p>{errors.statusText || errors.message}</p>
       <Link to={`/`}>Home</Link>
     </div>
    )
 }
 export default ErrorHandle;