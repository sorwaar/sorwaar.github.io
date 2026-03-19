import heroImg from '../assets/hero.png'

export default function ResumePage() {
  return (
    <div className="resume-wrapper">
      <div className="resume-profile-holder">
        <img className="resume-profile-pic" src={heroImg} alt="Sorwar Hossain" />
      </div>

      <div className="resume-header text-center">
        <h2 className="resume-name">SORWAR HOSSAIN</h2>
        <div className="resume-role-title">SENIOR SOFTWARE ENGINEER</div>
        <div className="resume-contact">
          <span>
            <i className="bi bi-telephone"></i> +880 17 5033 0032
          </span>
          <span>
            <i className="bi bi-envelope"></i> sorwar.dev@gmail.com
          </span>
          <span>
            <i className="bi bi-geo-alt"></i> Mirpur-1, Dhaka
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
              Senior Software Engineer with extensive experience delivering production-grade web
              applications. Skilled in backend architecture with Laravel, scalable API design,
              and frontend integrations using Nuxt.js and modern JavaScript frameworks.
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
                  <span className="resume-position-time">May 2021 - Present</span>
                  <span className="resume-company-name">KAZ Software Limited</span>
                </div>
                <h5 className="resume-position-title">Senior Software Engineer</h5>
                <ul className="resume-timeline-list">
                  <li>
                    Leading end-to-end development of a large-scale platform (Yapit) combining social
                    media, digital wallet, and multi-vendor systems.
                  </li>
                  <li>Designed scalable backend architecture using Laravel, Nuxt.js, and service patterns.</li>
                  <li>Built and maintained high-performance REST APIs for web, mobile, and third-party integrations.</li>
                  <li>Implemented CI/CD pipelines and automated deployment workflows.</li>
                  <li>Managed server infrastructure, deployments, and production environments.</li>
                  <li>Optimized performance using Redis caching, queues, and database tuning.</li>
                  <li>Led development team, handled code reviews, and sprint planning.</li>
                  <li>Conducted requirement analysis and worked directly with clients and stakeholders.</li>
                  <li>Ensured API security, authentication, and system reliability.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">May 2020 - Jan 2021</span>
                  <span className="resume-company-name">Walletmix Limited</span>
                </div>
                <h5 className="resume-position-title">Software Developer</h5>
                <ul className="resume-timeline-list">
                  <li>Developed backend systems for high-scale telecom platforms.</li>
                  <li>Built scalable applications using Laravel, PostgreSQL, and Redis.</li>
                  <li>Designed and optimized REST APIs for recharge, rewards, and campaign systems.</li>
                  <li>Worked with message queues (RabbitMQ) for asynchronous processing.</li>
                  <li>Contributed to GitLab CI/CD pipelines for automated builds and deployments.</li>
                  <li>Contributed to development and enhancement of payment gateway and SMS systems</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Nov 2017 - Feb 2020</span>
                  <span className="resume-company-name">Safara IT LTD (Edison Group)</span>
                </div>
                <h5 className="resume-position-title">Software Developer</h5>
                <ul className="resume-timeline-list">
                  <li>Developed inventory and supply chain systems for enterprise clients.</li>
                  <li>Built production and merchandising solutions for the garment industry.</li>
                  <li>Designed and implemented backend systems using PHP frameworks and MySQL.</li>
                  <li>Developed an Ionic mobile app for real-time staff tracking and expense management.</li>
                  <li>Gathered requirements directly from clients and delivered customized solutions.</li>
                  <li>Promoted from Junior Developer to Software Developer within one year.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">May 2017 - Oct 2017</span>
                  <span className="resume-company-name">Nanosoft</span>
                </div>
                <h5 className="resume-position-title">Junior Developer</h5>
                <ul className="resume-timeline-list">
                  <li>Worked on government and enterprise applications using PHP and CodeIgniter.</li>
                  <li>Assisted in backend development and database design.</li>
                  <li>Collaborated with clients for requirement understanding and updates.</li>
                  <li>Gained hands-on experience with Git, SVN, and Linux environments.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Jan 2017 - Apr 2017</span>
                  <span className="resume-company-name">Source Tech</span>
                </div>
                <h5 className="resume-position-title">Intern</h5>
                <ul className="resume-timeline-list">
                  <li>Built a full-stack matrimony platform using PHP, MySQL, HTML, CSS, and JavaScript.</li>
                  <li>Converted the project into CodeIgniter and developed the Source Tech official website.</li>
                  <li>Learned deployment and hosting using cPanel and basic software lifecycle practices.</li>
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
                'Docker',
                'Git',
                'WordPress',
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
              SOFT SKILLS
            </h4>
            <div className="resume-skill-tags">
              {['Team Leadership', 'Client Management', 'Requirement Gathering', 'Problem Solving', 'Time Management', 'Communication'].map((t) => (
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
              <i className="bi bi-arrow-right-short"></i> <strong>Yapit</strong>
              <p>Social media platform with digital wallet, crypto, ecommerce, and event management.</p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>LiquidCash</strong>
              <p>Digital wallet and payment system with crypto support and multi-vendor ecommerce.</p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Robi Alpha</strong>
              <p>Telecom platform for selling Airtime & packs with rewards, built on Laravel, Redis & Kubernetes.</p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Shobar Dhaka — Citizen Engagement</strong>
              <p>Citizen engagement platform for reporting issues; led backend development at Walletmix.</p>
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
              <div className="resume-degree">B.Sc in Computer Science Engineering</div>
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
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  )
}
