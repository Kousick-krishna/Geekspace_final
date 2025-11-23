import { useEffect, useState } from 'react';
import AOS from 'aos';
import '../styles/contact.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/clients`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});



      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      console.error("Error submitting contact form:", error);

      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading" data-aos="fade-up">Contact Us</h2>
          <p className="subheading" data-aos="fade-up" data-aos-delay="100">
            Get in touch with us
          </p>
        </div>

        <div className="grid-container">
          <div data-aos="fade-right">
            <div className="contact-info">
              <h3 className="contact-info-heading">Contact Information</h3>
              <p>Email: geekspace24by7@gmail.com</p>
              <p>Call: +91 7305825218</p>
            </div>
          </div>

          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contact-form">
              {status.message && (
                <div className={`status-message ${status.type === 'success' ? 'success' : 'error'}`}>
                  {status.message}
                </div>
              )}

              <div className="form-field">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div className="form-field">
                <label className="label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div className="form-field">
                <label className="label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div className="form-field">
                <label className="label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="textarea"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
