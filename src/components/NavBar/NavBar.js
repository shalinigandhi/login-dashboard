import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth';

const NavBar = () => {
    const auth = useAuth();
    return (
        <nav>
            <NavLink to="/">Dashboard</NavLink>
            {
                !auth.user && <NavLink to="/login">Login</NavLink>
            }
        </nav>
    )
}

export default NavBar;