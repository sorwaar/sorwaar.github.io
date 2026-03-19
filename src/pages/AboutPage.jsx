import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import yapitImg from '../assets/projects/yapit.png'
import shobarImg from '../assets/projects/shobar-dhaka.png'
import robiImg from '../assets/projects/robi-alpha.png'

const featuredProjects = [
  {
    title: 'Yapit',
    summary:
      'Social media platform with an integrated digital wallet, multi-vendor ecommerce, event management, places discovery, and large-scale media handling.',
    image: yapitImg,
  },
  {
    title: 'Robi Alpha',
    summary:
      'Telecom platform for selling airtime and packs with rewards, backed by a high-performance Laravel stack using PostgreSQL, Redis and message queues.',
    image: robiImg,
  },
  {
    title: 'Shobar Dhaka',
    summary:
      'Citizen engagement platform for reporting and resolving municipal issues, featuring a Laravel backend and admin workflows for officer tasking and tracking.',
    image: shobarImg,
  },
]

const companies = [
  'KAZ Software',
  'Walletmix',
  'Safara IT',
  'Nanosoft',
  'Source Tech',
  'Robi Axiata',
  'ACI Chemicals',
  'Edison Group',
  'Concordia Garments',
]

const techIcons = [
  { name: 'PHP', abbr: 'P', color: '#777bb4', text: '#fff' },
  { name: 'Laravel', abbr: 'L', color: '#ff2d20', text: '#fff' },
  { name: 'CodeIgniter', abbr: 'CI', color: '#ee4623', text: '#fff' },
  { name: 'JavaScript', abbr: 'JS', color: '#f7df1e', text: '#000' },
  { name: 'TypeScript', abbr: 'TS', color: '#3178c6', text: '#fff' },
  { name: 'Node.js', abbr: 'No', color: '#339933', text: '#fff' },
  { name: 'Vue.js', abbr: 'V', color: '#4fc08d', text: '#fff' },
  { name: 'Nuxt.js', abbr: 'Nx', color: '#00dc82', text: '#fff' },
  { name: 'Angular', abbr: 'Ng', color: '#dd0031', text: '#fff' },
  { name: 'HTML', abbr: 'H', color: '#e34f26', text: '#fff' },
  { name: 'CSS/Sass', abbr: 'S', color: '#cc6699', text: '#fff' },
  { name: 'MySQL', abbr: 'My', color: '#4479a1', text: '#fff' },
  { name: 'PostgreSQL', abbr: 'PG', color: '#4169e1', text: '#fff' },
  { name: 'Redis', abbr: 'Re', color: '#dc382d', text: '#fff' },
  { name: 'Docker', abbr: 'D', color: '#2496ed', text: '#fff' },
  { name: 'Kubernetes', abbr: 'K8', color: '#326ce5', text: '#fff' },
  { name: 'WordPress', abbr: 'W', color: '#21759b', text: '#fff' },
  { name: 'Ionic', abbr: 'Io', color: '#3880ff', text: '#fff' },
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
            Senior Software Engineer with 9+ years of hands-on experience turning complex business
            requirements into clean, scalable web applications. From government portals and telecom
            platforms to social media and fintech products — I work across the full stack, architecting
            Laravel backends, designing databases, and building polished Vue.js / Nuxt.js frontends.
            Take a look at my{' '}
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
          From social media platforms and digital wallets to telecom systems and citizen
          engagement portals — here are some highlights from my recent work.
        </div>
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-thumb">
                <img src={p.image} alt={p.title} className="thumb-img" />
              </div>
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
              From building my first production-ready applications to architecting large-scale
              platforms integrating social media, digital payments, and multi-vendor commerce,
              I've grown across every phase of the software lifecycle. I've collaborated directly
              with users, enterprises, and government teams — turning complex requirements into
              scalable, reliable systems. I believe great software is built not just with code,
              but with a deep understanding of the people it serves.
            </blockquote>
          </div>
          <div className="source-holder">— Sorwar Hossain, Senior Software Engineer</div>
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
