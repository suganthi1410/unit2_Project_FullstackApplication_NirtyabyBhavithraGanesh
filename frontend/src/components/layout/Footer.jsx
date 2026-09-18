import { Link } from "react-router-dom";
import footerimage from '../../assets/images/footerimage.jpeg';

//function created for footer that displays the link to other pages,
//added youtube link,quotes and image

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-center">  
        <p className="footer-quote"> "Dance.Devotion.Discipline" </p>    
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/class">Class</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/review">Reviews</Link>          
        </nav>
        <div className="footer-image">
        <img src={footerimage} alt="Natarajar BW" />
      </div>
        <p className="copyright">
          &copy; {year} Nirtya by Bhavithra Ganesh. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
}
export default Footer;
