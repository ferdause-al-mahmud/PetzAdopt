import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
    return (
        <div className="relative ">
            <Navbar />
            <div className=' min-h-[calc(100vh-68.5px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;