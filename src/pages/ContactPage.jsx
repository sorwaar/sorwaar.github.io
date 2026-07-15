export default function ContactPage() {
  return (
    <section className="section contact-section">
      <h3 className="section-heading">Get In Touch</h3>
      <div className="section-intro limit-max-width mx-auto text-center">
        Interested in working together or have a project in mind? Feel free to reach out. I'm
        always open to discussing new opportunities and ideas.
      </div>

      <div className="contact-layout">
        {/* Left — Info Cards */}
        <div className="contact-info-col">
          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="bi bi-envelope"></i>
            </div>
            <div className="contact-card-body">
              <h5 className="contact-card-label">Email</h5>
              <a href="mailto:sorwar.dev@gmail.com">sorwar.dev@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="bi bi-telephone"></i>
            </div>
            <div className="contact-card-body">
              <h5 className="contact-card-label">Phone</h5>
              <a href="tel:+8801750330032">+880 175 033 0032</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="contact-card-body">
              <h5 className="contact-card-label">Location</h5>
              <span>Nikunja-2, Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/sorwaar" target="_blank" rel="noreferrer" title="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/sorwar" target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com/thesorwarhossain" target="_blank" rel="noreferrer" title="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://x.com/sorwar" target="_blank" rel="noreferrer" title="X">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-form-col">
          <h4 className="contact-form-heading">Send Me A Message</h4>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea rows="6" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-cta">
              Send Message <i className="bi bi-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
