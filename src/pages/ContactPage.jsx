export default function ContactPage() {
  return (
    <section className="section contact-section">
      <h3 className="section-heading">Get In Touch</h3>
      <div className="section-intro limit-max-width mx-auto text-center">
        Interested in working together or have a project in mind? Feel free to reach out. I'm
        always open to discussing new opportunities and ideas.
      </div>

      <div className="contact-icons">
        <a href="mailto:sorwar.dev@gmail.com" className="contact-icon-item" title="Email">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="tel:+8801750330032" className="contact-icon-item" title="Phone">
          <i className="bi bi-telephone"></i>
        </a>
        <a href="https://github.com/sorwaar" target="_blank" rel="noreferrer" className="contact-icon-item" title="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://linkedin.com/in/sorwar" target="_blank" rel="noreferrer" className="contact-icon-item" title="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://instagram.com/thesorwarhossain" target="_blank" rel="noreferrer" className="contact-icon-item" title="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://x.com/sorwar" target="_blank" rel="noreferrer" className="contact-icon-item" title="X">
          <i className="bi bi-twitter-x"></i>
        </a>
      </div>

      <h4 className="contact-form-heading">Contact Form</h4>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea rows="6" placeholder="Your message"></textarea>
        <button type="submit" className="btn btn-cta">
          Submit
        </button>
      </form>
    </section>
  )
}
