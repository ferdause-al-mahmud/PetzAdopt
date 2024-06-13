import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="min-h-[calc(90vh-68px)] flex">
                <Sidebar />
                <div className="md:ml-[288px] flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;