import { Link } from 'react-router-dom';
import HomeHeader from '../../images/HomeHeader.jpg'
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
const Navbar = () => {
    const {logout, isPending} = useLogout()
    const {user} = useAuthContext()
    return (  
        <div>
            <img className="img-HomeHeader" src={HomeHeader} alt="HomeHeader image"style={{
                        borderRadius: "8px",
                        width: "100%"
                    }}/>
            <nav className="navbar">
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/Services">Services</Link>
                        <Link to="/Products">Products</Link>
                        <Link to="/SpecialtyTools">Specialty Tools</Link>
                        <Link to="/Contact">Contact</Link>
                        {!user && (
                            <>
                            <Link to="/login">Employee Login</Link>
                            <Link to="/signup">Employee Signup</Link>
                            </>
                        )}
                        {user && (
                            <>
                            {!isPending && <button className="logout-btn" onClick={logout}>Logout</button>}
                            {isPending && <button className="logout-btn" disabled>Logging out...</button>}
                            </>
                        )}
                    </div>

                
            </nav>

        </div>
    );
}
 
export default Navbar ;