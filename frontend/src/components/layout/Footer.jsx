import { Link } from "react-router-dom";
import footerimage from '../../assets/images/footerimage.jpeg';

//function created for footer that displays the link to other pages,
//added youtube link,quotes and image

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">QUICK LINKS</p>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/class">Class</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <p className="footer-quote"> "Dance.Devotion.Discipline" </p>
        </nav>
        <div className="youtube-link">
          <a
            href="https://www.youtube.com/@bharathanatyam9772/featured"
            target="_blank"
          >
            {" "}
            Youtube
          </a>
        </div>
        <p className="copyright">
          &copy; {year} Nirtya by Bhavithra Ganesh. All rights reserved.
        </p>
      </div>
      <div className="footer-right">
        <img src={footerimage} alt="Natarajar BW" />
      </div>
    </footer>
  );
}
export default Footer;
