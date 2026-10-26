import { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });

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
      // Fallback if clipboard permission is denied
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanRole = formData.role.trim();
    const cleanMsg = formData.message.trim();

    if (!cleanName || !cleanEmail) return;

    // Email format sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    setFormSubmitted(true);
    // Opens mail client with safely encoded, sanitized details
    const subject = encodeURIComponent(`Data Analyst Inquiry from ${cleanName} - ${cleanRole || 'Opportunity'}`);
    const body = encodeURIComponent(`Hi Kiran,\n\n${cleanMsg}\n\nBest regards,\n${cleanName}\n${cleanEmail}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <MessageSquare size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Let's Discuss Opportunities</h2>
          <p className="section-subtitle">
            Whether you have an open Junior Data Analyst position, a contract BI project, 
            or simply want to review dashboard best practices, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-channels-col">
            {/* Email Card with 1-Click Copy */}
            <div className="contact-channel-card glass-card">
              <div className="channel-icon-box bg-blue-subtle">
                <Mail size={22} className="text-blue" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Direct Email</span>
                <span className="channel-value">{emailAddress}</span>
              </div>
              <div className="channel-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary channel-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-primary channel-btn"
                >
                  <span>Write</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/kiransundhesha018"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card glass-card channel-link-card"
            >
              <div className="channel-icon-box bg-blue-subtle">
                <LinkedinIcon size={22} className="text-blue" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Professional Network</span>
                <span className="channel-value">linkedin.com/in/kiransundhesha018</span>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/kiransundhesha18"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card glass-card channel-link-card"
            >
              <div className="channel-icon-box bg-purple-subtle">
                <GithubIcon size={22} className="text-purple" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Project Code & Queries</span>
                <span className="channel-value">github.com/kiransundhesha18</span>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" />
            </a>

            {/* Availability Box */}
            <div className="availability-card glass-card">
              <div className="availability-status">
                <span className="pulse-dot"></span>
                <span className="availability-status-text">Available Immediately</span>
              </div>
              <p className="availability-desc">
                Currently available for full-time Data Analyst, BI Analyst, or Associate Data Engineer roles. 
                Ready to contribute on Day 1.
              </p>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <Sparkles size={18} className="text-blue" />
                <h3 className="form-card-title">Send a Quick Message</h3>
              </div>

              {formSubmitted ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <Check size={32} className="text-emerald" />
                  </div>
                  <h4>Message Prepared!</h4>
                  <p>Opening your default email client with your message pre-filled. Looking forward to speaking!</p>
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
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={100}
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={120}
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-role">Role / Opportunity Type</label>
                    <input
                      id="contact-role"
                      type="text"
                      maxLength={120}
                      placeholder="e.g. Junior Data Analyst / BI Specialist"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message or Project Scope</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      maxLength={1500}
                      placeholder="Tell me about the role, team, or data challenge you're solving..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={16} />
                    <span>Send Message to Kiran</span>
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
