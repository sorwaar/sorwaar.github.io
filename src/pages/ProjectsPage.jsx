import { Link } from 'react-router-dom'
import yapitImg from '../assets/projects/yapit.png'
import shobarImg from '../assets/projects/shobar-dhaka.png'
import robiImg from '../assets/projects/robi-alpha.png'
import liquidcashImg from '../assets/projects/liquidcash.png'

const projects = [
  {
    title: 'Yapit + LiquidCash — Full Stack Social Marketplace & Wallet',
    summary:
      'End-to-end product: Nuxt frontend + Laravel APIs + wallet/payments, multi-vendor ecommerce, events/booking modules, places discovery, and community/influencer-oriented features. Built at KAZ Software.',
    stack: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: yapitImg,
  },
  {
    title: 'LiquidCash — Digital Wallet & Payments',
    summary:
      'Digital wallet and payment subsystem within Yapit supporting crypto transactions, peer-to-peer transfers, and multi-vendor ecommerce payments.',
    stack: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis'],
    image: liquidcashImg,
  },
  {
    title: 'Robi Alpha — Telecom Merchant Experience',
    summary:
      'Merchant sales of airtime and packs with rewards; Laravel services, queues, caching, and containerized ops for Robi Axiata. Built at Walletmix.',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
    image: robiImg,
  },
  {
    title: 'Shobar Dhaka — Citizen + Officer Full Stack Workflows',
    summary:
      'Issue reporting UX, officer admin panels, status tracking, and reporting dashboards; full backend ownership with JS frontends at Walletmix.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: shobarImg,
  },
  {
    title: 'ACI Chemicals OMS — Enterprise Admin & Reporting',
    summary:
      'Full-stack OMS with dashboards, ACL, commercial document flows (inquiry, trial, sample, negotiation, work orders, PI/PO, debit notes), and operational analytics.',
    stack: ['CodeIgniter', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Safara OMS & Mobile Tracker',
    summary:
      'Office management web system plus Ionic/Angular mobile tracking/expense app integrated with PHP APIs for Safara IT (Edison Group).',
    stack: ['CodeIgniter', 'Ionic', 'Angular', 'PHP', 'MySQL'],
  },
  {
    title: 'Garments Production & Merchandising',
    summary:
      'Production monitoring, merchandising, and inventory systems for Concordia Garments and Auko Tex — ACL, style registration, BOM, costing, TNA, and reports.',
    stack: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
  },
  {
    title: 'PBS & SREDA — Government Portals',
    summary:
      'Government projects at Nanosoft: Bangladesh Polli Bidduit (PBS1 Mymensingh) and SREDA portal, with on-site client collaboration.',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript'],
  },
]

export default function ProjectsPage() {
  return (
    <section className="section projects-section">
      <h3 className="section-heading">My Projects</h3>
      <div className="section-intro limit-max-width mx-auto text-center">
        Here are the key projects from my 9+ year journey — spanning government portals, telecom
        platforms, garments ERP, fintech, and social media. Need help with your project?
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
            <div className="project-item-thumb">
              {p.image ? (
                <img src={p.image} alt={p.title} className="thumb-img" />
              ) : null}
            </div>
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
