import { useEffect, useMemo, useState } from 'react'
import { NavLink, Navigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import heroImg from './assets/hero.png'
import './App.css'

import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

const NAV_ITEMS = [
  { to: '/', icon: 'bi-person-circle', label: 'About' },
  { to: '/projects', icon: 'bi-briefcase', label: 'Projects' },
  { to: '/blog', icon: 'bi-pen', label: 'Blog' },
  { to: '/resume', icon: 'bi-file-earmark-text', label: 'Resume' },
  { to: '/contact', icon: 'bi-chat-dots', label: 'Contact' },
]

/* ── side panel nav ──────────────────────────────────── */
function SidePanel({ open, onClose }) {
  return (
    <>
      <div className={`side-panel ${open ? '' : 'closed'}`}>
        <nav className="main-nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span className="icon-holder">
                <i className={`bi ${item.icon}`}></i>
              </span>
              <span className="nav-text">{item.label}</span>
            </NavLink>
          ))}
          <button className="nav-close" onClick={onClose} aria-label="Close menu">
            <i className="bi bi-x"></i>
          </button>
        </nav>
      </div>
    </>
  )
}

/* ── top bar ────────────────────────────────────────── */
function TopBar({ onMenuToggle, theme, onThemeToggle }) {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-left">
          <button className="menu-toggler" onClick={onMenuToggle} aria-label="Toggle menu">
            <i className="bi bi-list"></i>
          </button>
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            <span className={`toggle-icon ${theme === 'light' ? 'active' : ''}`}>
              <i className="bi bi-brightness-high-fill"></i>
            </span>
            <span className={`toggle-icon ${theme === 'dark' ? 'active' : ''}`}>
              <i className="bi bi-moon-fill"></i>
            </span>
          </button>
        </div>

        <div className="top-center">
          <ul className="social-list">
            <li>
              <a href="https://x.com/sorwar" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/sorwaar" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/sorwar" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">
                <i className="bi bi-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/thesorwarhossain" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <Link to="/contact" className="btn btn-hire">
          Let's Talk
        </Link>
      </div>
    </div>
  )
}

/* ── mobile bottom nav ──────────────────────────────── */
function BottomNav() {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <i className={`bi ${item.icon}`}></i>
          <span>{item.label.toUpperCase()}</span>
        </NavLink>
      ))}
    </nav>
  )
}

/* ── additional links footer ────────────────────────── */
function AdditionalLinks() {
  return (
    <div className="additional-links">
      <h4>Additional Links</h4>
      <ul>
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/resume">RESUME</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  )
}

/* ── app shell ──────────────────────────────────────── */
function App() {
  const year = useMemo(() => new Date().getFullYear(), [])
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="app-container">
      <SidePanel open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content-wrapper">
        <TopBar
          onMenuToggle={toggleSidebar}
          theme={theme}
          onThemeToggle={toggleTheme}
        />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <AdditionalLinks />

        <footer className="site-footer">
          <small>&copy; {year} Sorwar Hossain</small>
        </footer>
      </div>

      <BottomNav />
    </div>
  )
}

export default App
