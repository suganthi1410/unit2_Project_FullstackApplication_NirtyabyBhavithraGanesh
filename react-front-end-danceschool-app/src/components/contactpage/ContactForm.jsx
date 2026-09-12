import { useState } from "react";

//Handles contact form input, validation, and success or error message displays.

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setError("All fields marked with * are required.");
      return;
    }

    setSuccess("Message sent successfully!");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });

    setTimeout(() => {
      setSuccess("");
    }, 5000);
  }

  return (
    <section className="contact-form">
      <h3>Send a Message</h3>

      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          First Name <span className="required-star">*</span>
        </label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label>
          Last Name <span className="required-star">*</span>
        </label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>
          Email <span className="required-star">*</span>
        </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>
          Message <span className="required-star">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
}
export default ContactForm;
