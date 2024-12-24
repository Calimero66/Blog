import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchBtn from './SearchBtn'; 

const NavBar = () => {

    // const [login, setLogin] = useState(false);

    return (
        <header className="w-full border-b">
            <div className="flex h-16 items-center justify-between px-6">
                {/* Logo and Navigation */}
                <div className="flex items-center gap-6">
                    <Link to="/login" className="font-bold text-2xl">
                        nuntium.
                    </Link>
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

                {/* Search and Buttons */}
                <div className="flex items-center gap-8">

                    <SearchBtn />
                    <div className="flex gap-2">
                        {/* todo :  */}
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
            </div>
        </header>
    );
};

export default NavBar;





