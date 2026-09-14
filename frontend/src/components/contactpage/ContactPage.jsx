import { Link } from "react-router-dom";
import ContactForm from "./ContactForm.jsx";
import "./ContactPage.css";

//Displays the Contact page with teacher details, location map, and the contact form.

function ContactPage() {
  return (
    <main className="contact-page">
      <h3 className="title">Get in touch</h3>
      <div className="contact-layout">
        <section className="teacher-info-leftsection">
          <h4>Contact details</h4>
          <p>
            <strong>Name:</strong> Guru Name
          </p>
          <p>
            <strong>Phone: 987-654-321</strong>
          </p>
          <p>
            <strong>Email:</strong> nirtyadance@gmail.com
          </p>
          <div className="map-container">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.031117777136!2d-90.55817479999999!3d38.600028699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d451e1462a2b%3A0x75043aea035e5a17!2sLog%20Hill%20Ln%2C%20Ballwin%2C%20MO%2063011!5e1!3m2!1sen!2sus!4v1784057449614!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="studio-location-box">
              <h6 className="studio-location-title">
                Studio Location: Log Hill Ln, Ballwin, MO 63011
              </h6>
              <ul className="studio-location-list">
                <li>Parking available</li>
                <li>Safe residential neighborhood</li>
                <li>Easy access from Ballwin & nearby areas</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="form-rightsection">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
export default ContactPage;
