import { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'kiransundhesha56@gmail.com';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const temp = document.createElement('textarea');
        temp.value = emailAddress;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.focus();
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMsg = formData.message.trim();

    if (!cleanName || !cleanEmail) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    setFormSubmitted(true);
    const subject = encodeURIComponent(`Data Analyst Opportunity / Message from ${cleanName}`);
    const body = encodeURIComponent(`Hi Kiran,\n\n${cleanMsg}\n\nFrom,\n${cleanName} (${cleanEmail})`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Whether you have an open opportunity, a question about a project, or just want to connect, 
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="contact-card contact-email-card">
              <div className="contact-card-icon">
                <Mail size={20} className="text-accent" />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Email Address</span>
                <span className="contact-card-value">{emailAddress}</span>
              </div>
              <div className="contact-card-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary contact-mini-btn"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-primary contact-mini-btn"
                >
                  <span>Write</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/kiransundhesha018"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-link-card"
            >
              <div className="contact-card-icon">
                <LinkedinIcon size={20} className="text-accent" />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">linkedin.com/in/kiransundhesha018</span>
              </div>
              <ExternalLink size={16} className="contact-arrow" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/kiransundhesha18"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-link-card"
            >
              <div className="contact-card-icon">
                <GithubIcon size={20} className="text-accent" />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">github.com/kiransundhesha18</span>
              </div>
              <ExternalLink size={16} className="contact-arrow" />
            </a>

            {/* Availability Note */}
            <div className="contact-status-card">
              <span className="pulse-dot"></span>
              <span>Open to full-time Data Analyst & BI opportunities</span>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-heading">Send a Quick Message</h3>
              <p className="form-subtext">Fill this out and it will open your email client pre-addressed to me.</p>

              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrap">
                    <Check size={24} className="text-emerald" />
                  </div>
                  <h4>Ready to Send!</h4>
                  <p>Your email client is opening with your pre-filled message. Talk soon!</p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ marginTop: '1rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Hi Kiran, I liked your IPL analytics project and would love to discuss an analyst role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
