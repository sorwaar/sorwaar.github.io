import { Link } from 'react-router-dom'
import yapitImg from '../assets/projects/yapit.png'
import shobarImg from '../assets/projects/shobar-dhaka.png'
import robiImg from '../assets/projects/robi-alpha.png'
import liquidcashImg from '../assets/projects/liquidcash.png'

const projects = [
  {
    title: 'Yapit — Social Media Platform',
    summary:
      'A feature-rich social media platform with digital wallet (LiquidCash), crypto integration, multi-vendor ecommerce, event management, places & location discovery, and large-scale media processing with complex algorithms. Built at KAZ Software.',
    stack: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: yapitImg,
  },
  {
    title: 'LiquidCash — Digital Wallet & Payments',
    summary:
      'A digital wallet and payment system integrated within Yapit, supporting crypto transactions, peer-to-peer transfers, and multi-vendor ecommerce payments.',
    stack: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis'],
    image: liquidcashImg,
  },
  {
    title: 'Robi Alpha — Telecom Platform',
    summary:
      'A platform where Robi Alpha users serve Robi & Airtel customers by selling Airtime and packs (Internet, Minute, Combo) and earn rewards. Built at Walletmix for Robi Axiata with a high-performance microservices architecture.',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
    image: robiImg,
  },
  {
    title: 'Shobar Dhaka — Citizen Engagement',
    summary:
      'A government citizen engagement and management platform where users post issues and backend officers manage and resolve them. Responsible for the entire backend development at Walletmix.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: shobarImg,
  },
  {
    title: 'Garments Production & Merchandising',
    summary:
      'Production monitoring, merchandising, and inventory management systems built for Concordia Garments and Auko Tex. Modules include ACL, Customer Info, Inquiry, Style Registration, BOM, Costing, TNA, and reports. Visited factories in Gazipur and Savar.',
    stack: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
  },
  {
    title: 'ACI Chemicals — Supply Chain & OMS',
    summary:
      'A supply chain management system and office management system for ACI Chemicals. Features include Customer, Inquiry, Trial, Sample, Negotiation, Work Order, PI, PO, Debit Note, ACL, and reporting. Presented at ACI head office in Dhaka.',
    stack: ['CodeIgniter', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Safara OMS & Mobile Tracker',
    summary:
      'An internal office management system for Safara IT (Edison Group) plus an Ionic mobile app for real-time tracking of outgoing marketing personnel and automated TA/DA calculation.',
    stack: ['CodeIgniter', 'Ionic', 'Angular', 'PHP', 'MySQL'],
  },
  {
    title: 'PBS & SREDA — Government Portals',
    summary:
      'Government projects at Nanosoft: Bangladesh Polli Bidduit (PBS1 Mymensingh) and SREDA portal. Worked on-site at SREDA office daily with a dedicated desk for direct client collaboration.',
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
