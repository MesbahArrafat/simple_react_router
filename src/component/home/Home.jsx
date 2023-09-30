import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = ()=>{
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    console.log('hellow');
   return(
    <div>
        <h1>This is Home page</h1>
        <Header></Header>
        {
            navigation.state === "loading" ? <p>Loadding...</p> :   <Outlet></Outlet>
        }
      
        <Footer></Footer>
    </div>
   )
}
export default Home;


// const Home = ()=>{
//     return(
//      <div>
       
//      </div>
//     )
//  }
//  export default Home;