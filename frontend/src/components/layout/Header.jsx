import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';

//function created for header that displays Logo,
//page title and links to other pages 

function Header({ onOpenLogin, onNavigate, loggedInUser }) {
    return (
        <header className="header">
            <div className="logo-title">
                <img src={logo} alt="Nirtya LOGO" width="100" className="logo" />
                <h1 className="title">Nirtya by Bhavithra Ganesh</h1>
            </div>

            <nav className="header-nav" >
                <Link to="/"  onClick={onNavigate}>Home</Link>
                <Link to="/about"  onClick={onNavigate}>About</Link>
                <Link to="/class"  onClick={onNavigate}>Class</Link>
                <Link to="/gallery"  onClick={onNavigate}>Gallery</Link>
                <Link to="/contact"  onClick={onNavigate}>Contact</Link>
                <Link to="/review"  onClick={onNavigate}>Reviews</Link>
                 {!loggedInUser && (
                <button className="login-btn" onClick={onOpenLogin}>
                        Login
                    </button>
                )}
                {loggedInUser && (
                    <>
                        <span className="welcome">Welcome, {loggedInUser}</span>
                        <button className="logout-btn" onClick={() => window.location.reload()}>
                            Logout
                        </button>
                    </>
                )}
            </nav>

        </header>
    );

};
export default Header;
