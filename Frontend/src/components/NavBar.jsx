import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchBtn from './SearchBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"

const NavBar = () => {

    const [profile, setProfile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const prof = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/blogs/isAuthenticated", { withCredentials: true })
                    .then(() => setLoading(false));
                // alert("token find");
                setProfile(true);
                console.log(response);


            } catch (err) {
                console.error(err);
                setLoading(false)
                // alert("token is not find.");

            }

        };

        prof();
    }, [])

    return (
        <header className="w-full border-b">
            <div className="flex h-16 items-center justify-between px-6">
                {/* Logo and Navigation */}
                <div className="flex items-center gap-6">
                    {profile ?
                        <Link to="/home" className="font-bold text-2xl">
                            nuntium.
                        </Link>
                        :
                        <Link to="/login" className="font-bold text-2xl">
                            nuntium.
                        </Link>
                    }
                    <nav className="hidden md:flex gap-6">
                        <Link to="/home" className="text-sm hover:text-primary">
                            Home
                        </Link>
                        <Link to="/tags" className="text-sm hover:text-primary">
                            Tags
                        </Link>
                        <Link to="/about" className="text-sm hover:text-primary">
                            About
                        </Link>
                    </nav>
                </div>
                {
                    profile ?
                        <div className="flex items-center gap-8">
                            <SearchBtn />
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        : loading ? <p>loading ...</p> :
                            <div className="flex items-center gap-8">

                                <SearchBtn />
                                <div className="flex gap-2">
                                    <Button variant="outline">
                                        <Link to="/login" className="text-sm hover:text-primary">
                                            Login
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to="/Register" className="text-sm">
                                            Register
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                }
            </div>
        </header>
    );
};

export default NavBar;





