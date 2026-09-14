import { Link } from "react-router-dom";
import banner from "../../assets/images/bannerbw1.jpeg";
import ReusableButton from "../ReusableButton";
import "./HomePage.css";

//Displays Home page with banner, Bharatanatyam intro, quote, and navigation buttons.
function HomePage() {
  return (
    <div className="home-page">
      <section className="banner">
        <img src={banner} alt="Dancer and Natarajar" className="banner-image" />
        <div className="banner-text">
          <h4>
            Welcome to Nirtya - Embrace the rhythm and Experience the grace and
            power of Bharathanatym
          </h4>
        </div>
      </section>
      <section className="about-bharatham">
        <h3>About Bharathanatyam</h3>
        <p>
          Bharatanatyam is one of India's oldest classical dance forms, known
          for its elegance, precision, and expressive storytelling.
          Bharatanatyam has three core elements: Nritta : Pure dance movements
          focused on rhythm and technique, without storytelling. Nritya :
          Expressive dance using facial expressions, gestures, and body language
          to convey emotion. Natya : Dramatic storytelling that combines
          movement, expression, and narrative.
        </p>
        <h2>Dance for everyone</h2>
        <p>
          From curious kids to passionate adults, everyone is welcome to learn,
          grow, and express through Bharatanatyam.
        </p>
        <p className="quote">
          Your age doesn't define your path — your passion does.
        </p>
        <div>
          <Link to="/class">
            <ReusableButton label="View Class Details" />
          </Link>
          <Link to="/contact">
            <ReusableButton label="View contact page" />
          </Link>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
