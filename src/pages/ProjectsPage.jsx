import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Robi Alpha',
    summary:
      'A platform where Robi Alpha users can serve different Robi & Airtel users by selling Airtime & different packs (Internet, Minute, Combo) and earn extra rewards in their Robi Alpha account.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Shobar Dhaka',
    summary:
      'A one-stop citizen engagement and management platform. Users can post an issue and from the backend an officer can manage and solve the issue.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Merchandising System',
    summary:
      'A production monitoring system built with VUE (frontend) and PHP (backend). Features include ACL, Customer Info, Inquiry, Style Reg, BOM, Costing, TNA, and reports.',
    stack: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
  },
  {
    title: 'Office Management System — EDISON Power',
    summary:
      'A comprehensive office management system with HR, Bill, Requisition, Attendance, and reports modules for EDISON Power.',
    stack: ['CodeIgniter', 'PHP', 'MySQL', 'HTML', 'JavaScript'],
  },
  {
    title: 'Business Management System — ACI Chemicals',
    summary:
      'A full business management system with Customer, Inquiry, Trial, Sample, Negotiation, Work Order, PI, PO, Debit Note, ACL, and reports modules.',
    stack: ['CodeIgniter', 'PHP', 'MySQL', 'HTML', 'JavaScript'],
  },
]

export default function ProjectsPage() {
  return (
    <section className="section projects-section">
      <h3 className="section-heading">My Projects</h3>
      <div className="section-intro limit-max-width mx-auto text-center">
        Here are some of the key projects I have worked on. I specialize in building large-scale
        web applications with Laravel, Vue.js, and CodeIgniter. Need help with your project?
        <div style={{ marginTop: '1rem' }}>
          <Link to="/contact" className="btn btn-cta">
            Start A Conversation <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </div>

      <div className="project-list-full">
        {projects.map((p) => (
          <div className="project-item" key={p.title}>
            <div className="project-item-info">
              <h4 className="project-item-title">
                <a href="#">{p.title}</a>
              </h4>
              <p className="project-item-summary">{p.summary}</p>
              <div className="tech-stack-label">
                <span className="stack-label">Tech Stack:</span>
                <div className="stack-icons">
                  {p.stack.map((t) => (
                    <span className="stack-badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-item-thumb"></div>
          </div>
        ))}
      </div>

      <div className="leadgen-card">
        <h4 className="leadgen-title">Need Help With Your Project?</h4>
        <p>
          I design, develop, and implement web applications from conception to completion. Get in
          touch to discuss how I can help with your next project.
        </p>
        <Link to="/contact" className="btn btn-cta">
          Get In Touch <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
    </section>
  )
}
