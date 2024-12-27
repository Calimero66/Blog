import { useEffect, useState } from 'react';
import Sidebar from '../sidebar';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';



const DashboardLayout = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {

        const auth = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/blogs/isAuthenticated", { withCredentials: true });
                // alert("token find");
                setIsAuthenticated(true);
                console.log(response);

            } catch (err) {
                console.error(err);
                // alert("token is not find.");
                navigate('/login');

            }
        };

        auth();
    }, [])

    return (
        <>
            {isAuthenticated ?
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    </div>
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                        <Sidebar />
                        <aside className="lg:w-1/5">
                        </aside>
                        <div className="flex-1 lg:max-w-4xl"><Outlet /></div>
                    </div>
                </div>
                :
                <p>notauth</p>}
        </>

    );
};

export default DashboardLayout;