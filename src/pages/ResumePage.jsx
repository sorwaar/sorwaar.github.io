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
              Senior Software Engineer with 8+ years of experience delivering production-grade web
              applications. Skilled in database architecture, full-stack development with
              PHP/Laravel and Vue.js, client management, and leading cross-functional teams to
              ship on time.
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
                  <li>Database planning, design and implement PHP (Laravel) based web applications.</li>
                  <li>Angular.js based Ionic application maintenance.</li>
                  <li>Manage clients, understand requirements, and manage team members and tasks.</li>
                  <li>Write high-performance and reliable code with Git version control.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">May 2020 - Jan 2021</span>
                  <span className="resume-company-name">Walletmix Limited</span>
                </div>
                <h5 className="resume-position-title">Software Developer</h5>
                <ul className="resume-timeline-list">
                  <li>PHP (Laravel) based web application development.</li>
                  <li>Design, build, and maintain high-performance and reliable code.</li>
                  <li>Worked with JavaScript, AJAX, Composer, PSR, PHPUnit.</li>
                  <li>Version control with Git and SVN, managed project deadlines.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Nov 2017 - Feb 2020</span>
                  <span className="resume-company-name">Safara IT LTD</span>
                </div>
                <h5 className="resume-position-title">Software Developer</h5>
                <ul className="resume-timeline-list">
                  <li>PHP-based web application development with object-oriented programming.</li>
                  <li>Managed version control with Git.</li>
                  <li>Learned and implemented new technologies quickly per client requirements.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">May 2017 - Nov 2017</span>
                  <span className="resume-company-name">Nanosoft</span>
                </div>
                <h5 className="resume-position-title">Junior Developer</h5>
                <ul className="resume-timeline-list">
                  <li>Developed web-based applications using PHP, JavaScript, jQuery.</li>
                  <li>Expertise in PHP framework CodeIgniter and MVC architecture.</li>
                </ul>
              </div>

              <div className="resume-timeline-item">
                <div className="resume-position-meta">
                  <span className="resume-position-time">Jan 2017 - Apr 2017</span>
                  <span className="resume-company-name">Source Tech</span>
                </div>
                <h5 className="resume-position-title">Intern</h5>
                <ul className="resume-timeline-list">
                  <li>Learned PHP, HTML, CSS fundamentals.</li>
                  <li>Designed and developed dynamic websites.</li>
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
                'Vue.js',
                'Nuxt.js',
                'Ionic',
                'MySQL',
                'PostgreSQL',
                'WordPress',
                'Docker',
                'Git',
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
              {['Team Leadership', 'Client Management', 'Problem Solving', 'Time Management', 'Communication'].map((t) => (
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
              <i className="bi bi-arrow-right-short"></i> <strong>Robi Alpha</strong>
              <p>Platform for selling Airtime & packs to Robi/Airtel users with reward system.</p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Shobar Dhaka</strong>
              <p>Citizen engagement platform for issue reporting and resolution management.</p>
            </div>
            <div className="resume-project-item">
              <i className="bi bi-arrow-right-short"></i> <strong>Merchandising</strong>
              <p>Production monitoring system with Vue.js frontend and Laravel backend.</p>
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
