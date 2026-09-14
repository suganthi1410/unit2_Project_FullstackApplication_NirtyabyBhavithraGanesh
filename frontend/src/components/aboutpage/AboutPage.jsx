import { Link } from "react-router-dom";
import banner from "../../assets/images/salangai2.jpeg";
import dancer1 from "../../assets/images/dancer1.jpeg";
import ReusableButton from "../ReusableButton";
import "./AboutPage.css";

//Displays About page with about the school,about teacher
//and shows the buttons to class and contact 

function AboutPage() {
  return (
    <main>
      <div className="about-page">
        <section className="banner-salangai">
          <img src={banner} alt="salangai" className="banner-image" />
          <div className="banner-about-text">
            <h4>ABOUT US</h4>
          </div>
        </section>
        <section>
          <div className="about-content-box">
            <h3 className="about-heading">
              Nirtya - A Space for Grace & Tradition
            </h3>
            <p>
              Nirtya is a Bharatanatyam school built on devotion, discipline,
              and the joy of movement. Our classes help students explore the
              beauty of classical dance while developing confidence, strength,
              and expressive storytelling.
            </p>
            <p>
              We believe Bharatanatyam is not just a dance form, it is a journey
              of culture, rhythm, and inner growth. Every student is guided with
              patience, care, and deep respect for tradition.
            </p>
          </div>
        </section>
        <h3 className="about-title">About Teacher</h3>
        <section className="about-layout">
          <div className="about-image-box">
            <img src={dancer1} alt="dancer" className="dancer-image" />
          </div>

          <div className="about-content-box1">
            <h3 className="about-heading">A Journey Rooted in Passion</h3>
            <p>
              Our Guru began her Bharatanatyam journey at a young age, learning
              under dedicated masters who shaped her foundation in rhythm,
              expression, and discipline. Over the years, she has performed,
              taught, and lived the art with devotion.
            </p>
            <p>
              Her teaching style blends traditional techniques with modern
              clarity, ensuring that every student from beginner to advanced
              feels supported and inspired.
            </p>
            <p>
              Through Nirtya, she hopes to pass on the grace, strength, and
              spiritual essence of Bharatanatyam to the next generation.
            </p>
          </div>
        </section>

        <div>
          <Link to="/class">
            <ReusableButton label="View Class Details" />
          </Link>

          <Link to="/contact">
            <ReusableButton label="View contact page" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
