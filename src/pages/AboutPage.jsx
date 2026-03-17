import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

const featuredProjects = [
  {
    title: 'Robi Alpha',
    summary:
      'A platform where Robi Alpha users can serve Robi & Airtel customers by selling Airtime & packs (Internet, Minute, Combo) and earn rewards.',
  },
  {
    title: 'Shobar Dhaka',
    summary:
      'A one-stop citizen engagement and management platform where users can post issues and officers can manage and resolve them.',
  },
  {
    title: 'Merchandising System',
    summary:
      'A production monitoring system with ACL, Customer Info, Inquiry, Style Reg, BOM, Costing, TNA, and reports modules.',
  },
]

const companies = [
  'KAZ Software',
  'Walletmix',
  'Safara IT',
  'Nanosoft',
  'Source Tech',
  'Robi',
  'Airtel',
  'EDISON Power',
  'ACI Chemicals',
]

const techIcons = [
  { name: 'PHP', abbr: 'P', color: '#777bb4', text: '#fff' },
  { name: 'Laravel', abbr: 'L', color: '#ff2d20', text: '#fff' },
  { name: 'CodeIgniter', abbr: 'CI', color: '#ee4623', text: '#fff' },
  { name: 'JavaScript', abbr: 'JS', color: '#f7df1e', text: '#000' },
  { name: 'TypeScript', abbr: 'TS', color: '#3178c6', text: '#fff' },
  { name: 'Vue.js', abbr: 'V', color: '#4fc08d', text: '#fff' },
  { name: 'Nuxt.js', abbr: 'Nx', color: '#00dc82', text: '#fff' },
  { name: 'Vuetify', abbr: 'Vu', color: '#1867c0', text: '#fff' },
  { name: 'HTML', abbr: 'H', color: '#e34f26', text: '#fff' },
  { name: 'CSS/Sass', abbr: 'S', color: '#cc6699', text: '#fff' },
  { name: 'MySQL', abbr: 'My', color: '#4479a1', text: '#fff' },
  { name: 'PostgreSQL', abbr: 'PG', color: '#4169e1', text: '#fff' },
  { name: 'WordPress', abbr: 'W', color: '#21759b', text: '#fff' },
  { name: 'Ionic', abbr: 'Io', color: '#3880ff', text: '#fff' },
  { name: 'Docker', abbr: 'D', color: '#2496ed', text: '#fff' },
]

const skills = [
  {
    icon: 'bi-code-slash',
    title: 'Backend Development',
    desc: 'Building robust web applications with PHP (Laravel, CodeIgniter), REST APIs, and server-side architecture.',
  },
  {
    icon: 'bi-layout-text-window-reverse',
    title: 'Frontend Development',
    desc: 'Creating responsive interfaces with Vue.js, Nuxt.js, Vuetify, HTML, CSS/Sass, and JavaScript.',
  },
  {
    icon: 'bi-database-check',
    title: 'Database Design',
    desc: 'Database planning, schema design, and optimization with MySQL and PostgreSQL for high-performance applications.',
  },
  {
    icon: 'bi-phone',
    title: (
      <>
        Mobile App
        <br />
        Development
      </>
    ),
    desc: 'Building cross-platform mobile applications with Ionic and Angular for Android and iOS.',
  },
  {
    icon: 'bi-people',
    title: (
      <>
        Team Lead &amp;
        <br />
        Project Management
      </>
    ),
    desc: 'Managing team members, client communication, requirement analysis, and delivering projects from conception to completion.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Profile */}
      <section className="section profile-section">
        <div className="profile-holder">
          <img className="profile-pic" src={heroImg} alt="Sorwar Hossain" />
        </div>
        <h2 className="intro-name">Sorwar Hossain</h2>
        <div className="profile-intro limit-max-width mx-auto text-center">
          <p>
            Senior Software Engineer with 8+ years of hands-on experience turning complex business
            requirements into clean, scalable web applications. I work across the full stack — from
            architecting Laravel backends and designing databases to crafting polished Vue.js
            frontends. Take a look at my{' '}
            <Link to="/projects">project portfolio</Link>.
          </p>
        </div>
        <div className="section-cta text-center">
          <Link to="/resume" className="btn btn-cta">
            View Resume <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <h3 className="section-heading">Featured Projects</h3>
        <div className="section-intro limit-max-width mx-auto text-center">
          From telecom platforms serving millions to citizen engagement portals and enterprise
          resource systems — here are some highlights from my recent work.
        </div>
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-thumb"></div>
              <div className="project-body">
                <h5 className="project-title">
                  <a href="#">{p.title}</a>
                </h5>
                <p className="project-text">{p.summary}</p>
                <Link className="more-link" to="/projects">
                  View more <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta text-center">
          <Link to="/projects" className="btn btn-cta">
            More Projects <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </section>

      {/* Companies */}
      <section className="section">
        <h3 className="section-heading">Companies I Worked With</h3>
        <div className="client-logo-list">
          {companies.map((c) => (
            <div className="logo-item" key={c}>
              <div className="logo-holder">{c}</div>
            </div>
          ))}
        </div>
        <div className="testimonial-area">
          <div className="quote-holder">
            <span className="quote-mark left">&ldquo;</span>
            <span className="quote-mark right">&rdquo;</span>
            <blockquote className="quote-content">
              I thrive on solving real-world problems through code — whether it's building a
              platform that processes thousands of daily transactions or designing a system that
              streamlines an entire organization's workflow.{' '}
              <span className="quote-highlight">
                I take projects from initial concept through to production, with a focus on
                reliability, performance, and clean architecture.
              </span>
            </blockquote>
          </div>
          <div className="source-holder">Sorwar Hossain, Senior Software Engineer</div>
        </div>
        <div className="section-cta text-center">
          <Link to="/contact" className="btn btn-cta">
            Get In Touch <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </section>

      {/* Skills & Experiences */}
      <section className="section skills-section">
        <h3 className="section-heading">Skills &amp; Experiences</h3>
        <div className="section-intro limit-max-width mx-auto text-center">
          Over the years I've built deep expertise across the full web development stack.
          Here are the technologies and disciplines I work with daily.
        </div>
        <div className="tech-list">
          {techIcons.map((t) => (
            <div className="icon-item" key={t.name}>
              <div
                className="tech-icon-box"
                style={{ background: t.color, color: t.text }}
                title={t.name}
              >
                {t.abbr}
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta text-center">
          <Link to="/resume" className="btn btn-cta">
            View Resume <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
        <div className="skill-blocks">
          {skills.map((s, i) => (
            <div className="skill-item" key={i}>
              <div className="item-icon-holder">
                <i className={`bi ${s.icon} item-icon`}></i>
              </div>
              <h3 className="item-title">{s.title}</h3>
              <div className="item-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="section-cta text-center">
          <Link to="/contact" className="btn btn-cta">
            Get In Touch <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
