import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
              <div className=" mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
              </div>
        </div>
    );
};

export default Root;