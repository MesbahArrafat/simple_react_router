import { Link, NavLink } from 'react-router-dom';
import  './Header.css';
const Header = ()=>{
    return(
     <div>
       <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        {/* <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link> */}
       </nav>
     </div>
    )
 }
 export default Header;