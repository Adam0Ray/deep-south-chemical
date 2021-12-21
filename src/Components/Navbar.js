import { Link } from 'react-router-dom';
import HomeHeader from '../images/HomeHeader.jpg'
const Navbar = () => {
    
    
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
                </div>

                
            </nav>

        </div>
    );
}
 
export default Navbar ;