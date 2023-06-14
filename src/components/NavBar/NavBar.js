import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/auth';

export const NavBar = () => {
    const auth = useAuth();
    return (
        <nav>
            {
                !auth.user && <NavLink to="/login">Login</NavLink>
            }
        </nav>
    )
}