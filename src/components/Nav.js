import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
    return (
        <nav id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;