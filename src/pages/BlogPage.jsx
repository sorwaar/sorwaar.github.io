import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Building Scalable Laravel Applications: Lessons Learned',
    excerpt:
      'From my experience at KAZ Software, here are key patterns and practices for building large-scale Laravel apps that handle real-world traffic and complexity.',
    tags: ['laravel', 'php', 'architecture'],
    date: '12 Mar',
    read: '8 min read',
    comments: 0,
    featured: true,
  },
  {
    title: 'Vue.js + Laravel: The Perfect Full-Stack Combo',
    excerpt:
      'How I use Vue.js with Laravel to build production monitoring systems and enterprise applications with clean separation of concerns.',
    tags: ['vue.js', 'laravel', 'fullstack'],
    date: '26 Feb',
    read: '5 min read',
    comments: 0,
  },
  {
    title: 'Database Planning Tips for Complex Business Systems',
    excerpt:
      'Practical database design strategies I follow when building business management systems — from schema planning to query optimization.',
    tags: ['mysql', 'postgresql', 'database'],
    date: '18 Jan',
    read: '6 min read',
    comments: 0,
  },
  {
    title: 'From CodeIgniter to Laravel: A Migration Guide',
    excerpt:
      'Having worked extensively with both frameworks, here is my guide on migrating legacy CodeIgniter apps to Laravel.',
    tags: ['codeigniter', 'laravel', 'php'],
    date: '5 Dec',
    read: '7 min read',
    comments: 0,
  },
  {
    title: 'Managing Client Requirements as a Developer',
    excerpt:
      'Tips on effectively communicating with clients, understanding requirements, and translating them into technical solutions.',
    tags: ['career', 'management', 'tips'],
    date: '15 Nov',
    read: '4 min read',
    comments: 0,
  },
  {
    title: 'Getting Started with Ionic for Cross-Platform Apps',
    excerpt:
      'My experience building and maintaining Angular.js-based Ionic applications — what works, what to watch out for.',
    tags: ['ionic', 'mobile', 'angular'],
    date: '2 Oct',
    read: '5 min read',
    comments: 0,
  },
  {
    title: 'Git Workflow Best Practices for Team Projects',
    excerpt:
      'Version control strategies that have helped me manage code across multiple teams and projects effectively.',
    tags: ['git', 'devops', 'workflow'],
    date: '19 Sep',
    read: '3 min read',
    comments: 0,
  },
]

export default function BlogPage() {
  return (
    <section className="section blog-section">
      <h3 className="section-heading">My Blog</h3>
      <div className="section-intro limit-max-width mx-auto text-center">
        Sharing insights from my journey as a software engineer — tips on Laravel, Vue.js,
        database design, and building enterprise web applications.
        <div style={{ marginTop: '1rem' }}>
          <Link to="/projects" className="btn btn-cta">
            View My Projects <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </div>

      <div className="blog-post-list">
        {posts.map((post, i) => (
          <article className={`post-item ${post.featured ? 'featured' : ''}`} key={i}>
            <div className="post-item-inner">
              {post.featured && <div className="post-item-image"></div>}
              <div className="post-item-body">
                <h4 className="post-title">{post.title}</h4>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span className="tag-badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="post-item-footer">
                <span>{post.date}</span>
                <span>{post.read}</span>
                <span>
                  <i className="bi bi-chat-dots"></i> {post.comments}
                </span>
              </div>
            </div>
          </article>
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
