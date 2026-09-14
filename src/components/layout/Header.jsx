import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';

//function created for header that displays Logo,
//page title and links to other pages 

function Header() {
    return (
        <header className="header">
            <div className="logo-title">
                <img src={logo} alt="Nirtya LOGO" width="100" className="logo" />
                <h1 className="title">Nirtya by Bhavithra Ganesh</h1>
            </div>

            <nav className="header-nav" >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/class">Class</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </nav>

        </header>
    );

};
export default Header;
