import { useState } from 'react'
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  SendIcon,
  CheckCircleIcon,
} from '../components/Icons'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // No backend — just show success state.
    // To wire up a real form, use Formspree, EmailJS, or a serverless function.
    setSubmitted(true)
  }

  return (
    <main className="page-content">
      <section className="section contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Say Hello</span>
            <h2 className="section-title">Contact</h2>
          </div>

          <div className="contact-grid">
            {/* Left: contact info */}
            <div className="contact-info">
              <h3>Let's connect</h3>
              <p>
                Whether you have a question, an opportunity, or just want to
                say hi — my inbox is open. I'll do my best to get back to you
                promptly.
              </p>

              <div className="contact-links">
                <a href="mailto:you@example.com" className="contact-link">
                  <span className="contact-link-icon">
                    <MailIcon size={16} />
                  </span>
                  you@example.com
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <LinkedinIcon size={16} />
                  </span>
                  linkedin.com/in/yourprofile
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <GithubIcon size={16} />
                  </span>
                  github.com/yourusername
                </a>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckCircleIcon size={28} />
                  </div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <small style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                          {errors.name}
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <small style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                          {errors.email}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Job opportunity / Collaboration / Just saying hi"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <small style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                        {errors.message}
                      </small>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    <SendIcon size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
