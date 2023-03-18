import Aside from "../components/Aside";
import Header from "../components/Header";


const Layout = () => {
   return ( 
   <div className="w-[100%] flex">
      <Aside/>
      <Header/>
   </div> 
   );
}
 
export default Layout;