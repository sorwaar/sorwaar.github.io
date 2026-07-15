import heroImg from '../assets/hero.png'

export default function ResumePage() {
  return (
    <div className="resume-wrapper">
      <div className="resume-profile-holder">
        <img className="resume-profile-pic" src={heroImg} alt="Sorwar Hossain" />
      </div>

      <div className="resume-header text-center">
        <h2 className="resume-name">SORWAR HOSSAIN</h2>
        <div className="resume-role-title">SENIOR SOFTWARE ENGINEER | FULL STACK PHP / LARAVEL</div>
        <div className="resume-contact">
          <span>
            <i className="bi bi-telephone"></i> +880 17 5033 0032
          </span>
          <span>
            <i className="bi bi-envelope"></i> sorwar.dev@gmail.com
          </span>
          <span>
            <i className="bi bi-geo-alt"></i> Nikunja-2, Dhaka
          </span>
        </div>
      </div>

      <div className="resume-body">
        <div className="resume-main">
          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-person"></i>
              </span>
              ABOUT ME
            </h4>
            <p>
              Senior Software Engineer (Full Stack PHP/Laravel) with 9+ years delivering complete
              product slices — Laravel backends, Vue/Nuxt and Angular/Ionic frontends,
              MySQL/PostgreSQL data models, and production deployments. Experienced building REST
              APIs with Sanctum/Passport auth, wallet &amp; payment flows, marketplace/e-commerce
              features, RBAC admin dashboards, Redis/queue pipelines, and Linux operations.
            </p>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-briefcase"></i>
              </span>
              WORK EXPERIENCE
            </h4>

            <div className="resume-timeline">
              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Feb 2021 - Present</span>
                  <span className="resume-company-name">KAZ Software Limited</span>
                </div>
                <h5 className="resume-position-title">Senior Software Engineer</h5>
                <ul className="resume-timeline-list">
                  <li>
                    Led full-stack delivery of Yapit: Laravel API + Nuxt.js frontend for a
                    social/marketplace product with wallet (LiquidCash), multi-vendor ecommerce,
                    events, places, and media workflows.
                  </li>
                  <li>
                    Built and consumed REST APIs secured with token authentication (Sanctum/Passport
                    patterns); implemented frontend auth sessions and permission-aware UI states.
                  </li>
                  <li>
                    Developed wallet and checkout experiences spanning backend transaction rules and
                    Nuxt-facing user journeys (P2P, merchant payments, crypto-capable flows).
                  </li>
                  <li>
                    Implemented Redis caching, queue jobs, and scheduled tasks to keep media-heavy
                    and transactional UX responsive under load.
                  </li>
                  <li>
                    Created admin panels and analytics/reporting surfaces for operators and
                    merchants; applied RBAC across API and UI.
                  </li>
                  <li>
                    Owned CI/CD, Linux deployments, and full-stack production debugging (API ↔ DB ↔
                    frontend regressions).
                  </li>
                  <li>
                    Collaborated with clients on product architecture; led reviews emphasizing clean
                    code, component/API contracts, and refactoring of aging modules.
                  </li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">May 2020 - Jan 2021</span>
                  <span className="resume-company-name">Walletmix Limited</span>
                </div>
                <h5 className="resume-position-title">Software Developer</h5>
                <ul className="resume-timeline-list">
                  <li>
                    Delivered Laravel backends and supporting JS frontends for telecom and government
                    products (Robi Alpha, Shobar Dhaka).
                  </li>
                  <li>
                    Built REST APIs for merchant recharge/rewards/campaigns; integrated payment
                    gateway and SMS services powering live customer flows.
                  </li>
                  <li>
                    Used PostgreSQL, Redis, and RabbitMQ queues for scalable async work; contributed
                    to Docker/Kubernetes-oriented delivery.
                  </li>
                  <li>
                    Owned Shobar Dhaka backend and admin/officer workflow UIs: issue intake,
                    assignment, tracking, and reporting.
                  </li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Nov 2017 - Feb 2020</span>
                  <span className="resume-company-name">Safara IT LTD (Edison Group)</span>
                </div>
                <h5 className="resume-position-title">Software Developer</h5>
                <ul className="resume-timeline-list">
                  <li>
                    Built full-stack enterprise OMS and merchandising systems (ACI Chemicals,
                    Concordia/garments clients) with PHP backends, JS UIs, ACL, and rich reporting.
                  </li>
                  <li>
                    Designed MySQL schemas and admin dashboards for commercial workflows (inquiry →
                    trial/sample → negotiation → work order / PI / PO).
                  </li>
                  <li>
                    Shipped an Ionic/Angular mobile app + backend for realtime staff tracking and
                    automated TA/DA expense logic.
                  </li>
                  <li>
                    Partnered with stakeholders on requirements and UX iterations; promoted from
                    Junior Developer to Software Developer within one year.
                  </li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">May 2017 - Nov 2017</span>
                  <span className="resume-company-name">Nanosoft</span>
                </div>
                <h5 className="resume-position-title">Junior Developer</h5>
                <ul className="resume-timeline-list">
                  <li>
                    Developed PHP/CodeIgniter + MySQL government portals (PBS, SREDA) with on-site
                    client collaboration, bug fixing, and Linux/Git workflows.
                  </li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Jan 2017 - Apr 2017</span>
                  <span className="resume-company-name">Source Tech</span>
                </div>
                <h5 className="resume-position-title">Intern</h5>
                <ul className="resume-timeline-list">
                  <li>
                    Built a full-stack matrimony web app (PHP/MySQL/JS), migrated to CodeIgniter MVC,
                    and deployed on shared hosting (cPanel); also delivered the company website.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-sidebar">
          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-tools"></i>
              </span>
              TECH STACK
            </h4>
            <div className="resume-skill-tags">
              {[
                'PHP',
                'Laravel',
                'CodeIgniter',
                'JavaScript',
                'TypeScript',
                'Node.js',
                'Vue.js',
                'Nuxt.js',
                'Angular',
                'Ionic',
                'MySQL',
                'PostgreSQL',
                'Redis',
                'RabbitMQ',
                'Docker',
                'Kubernetes',
                'Sanctum',
                'Passport',
                'Git',
                'GitLab CI/CD',
                'Linux',
                'Nginx',
              ].map((t) => (
                <span className="resume-skill-badge" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-people"></i>
              </span>
              DOMAINS
            </h4>
            <div className="resume-skill-tags">
              {[
                'Wallets & Payments',
                'Marketplace',
                'E-commerce',
                'RBAC / Admin Panels',
                'Reporting',
                'Telecom',
                'Government',
              ].map((t) => (
                <span className="resume-skill-badge" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-code-square"></i>
              </span>
              KEY PROJECTS
            </h4>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Yapit + LiquidCash</strong>
              <p>
                Full-stack social marketplace with wallet/payments, multi-vendor ecommerce, and
                events.
              </p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Robi Alpha</strong>
              <p>
                Telecom merchant airtime/pack sales with rewards — Laravel, Redis, RabbitMQ,
                Kubernetes.
              </p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Shobar Dhaka</strong>
              <p>
                Citizen + officer workflows with admin panels and reporting; full backend ownership.
              </p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>ACI Chemicals OMS</strong>
              <p>Enterprise supply-chain OMS with dashboards, ACL, and operational analytics.</p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Safara OMS &amp; Mobile Tracker</strong>
              <p>Office management system plus Ionic/Angular staff tracking and expense app.</p>
            </div>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-mortarboard"></i>
              </span>
              EDUCATION
            </h4>
            <div className="resume-edu-item">
              <div className="resume-degree">B.Sc. in Computer Science &amp; Engineering</div>
              <div className="resume-degree-org">Southeast University, Bangladesh</div>
              <div className="resume-degree-time">2018 - 2023</div>
            </div>
            <div className="resume-edu-item">
              <div className="resume-degree">Diploma in Computer Science</div>
              <div className="resume-degree-org">Dhaka Govt. Polytechnic Institute</div>
              <div className="resume-degree-time">2013 - 2017</div>
            </div>
          </div>

          <div className="resume-section">
            <h4 className="resume-section-heading">
              <span className="resume-section-heading-icon">
                <i className="bi bi-globe2"></i>
              </span>
              LANGUAGES
            </h4>
            <p>Bengali (Native)</p>
            <p>English (Professional)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
