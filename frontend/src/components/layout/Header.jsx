import { Link } from 'react-router-dom';
import { useState } from "react";
import logo from '../../assets/images/logo.jpeg';


//function created for header that displays Logo,
//page title and links to other pages 

function Header({ loggedInUser , onLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header">
            <div className="logo-title">
                <img src={logo} alt="Nirtya LOGO" width="100" className="logo" />
                <h1 className="title">Nirtya by Bhavithra Ganesh</h1>
                       
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {"\u2630"}
            </div>

            </div>

            <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/class"  >Class</Link>
                <Link to="/gallery" >Gallery</Link>
                <Link to="/contact"  >Contact</Link>
                <Link to="/review"  >Reviews</Link>
                 {!loggedInUser && (
                <Link to="/login" className="login-btn">
                Login
                </Link>
                )}
                {loggedInUser && (
                    <>
                        <span className="welcome">Welcome, {loggedInUser}</span>
                        <button className="logout-btn" onClick={onLogout}>
                            Logout
                        </button>
                    </>
                )}
            </nav>

        </header>
    );

};
export default Header;
