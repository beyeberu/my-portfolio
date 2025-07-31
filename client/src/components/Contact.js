import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactForm.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-form-container">
        <h2 className="text-3xl font-bold mb-4 text-primary text-center">Contact Me</h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Have a question, project idea, or just want to say hello? Fill out the form below and I'll get back to you as soon as possible!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Name</label>
          </div>
          <div className="form-input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email</label>
          </div>
          <div className="form-input">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows={4}
            />
            <label>Message</label>
          </div>
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? <span className="loading-spinner"></span> : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <div className="form-status success-message">Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="form-status error-message">Failed to send message. Please try again.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;