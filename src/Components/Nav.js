import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav class="navbar">
                <Link to="/"> <i class="fas fa-home"></i> <span>home</span> </Link>
                <Link to="/about"> <i class="fas fa-user"></i> <span>about</span> </Link>
                <Link to="/Portfolio"> <i class="fas fa-briefcase"></i> <span>portfolio</span> </Link>
                <Link to="/contact"> <i class="fas fa-address-book"></i> <span>contact</span> </Link>
            </nav>
        </>
    );
}
export default Nav;