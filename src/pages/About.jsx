import { MapPinIcon, BookOpenIcon, BriefcaseIcon, MailIcon } from '../components/Icons'

const About = () => {
  return (
    <main className="page-content">
      <section className="section about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">A little about me</h2>
          </div>

          <div className="about-grid">
            {/* Left column: avatar + quick info */}
            <div className="about-avatar-col">
              <div className="avatar-box" aria-hidden="true">
                ML
              </div>
              <div className="about-quick-info">
                <div className="info-item">
                  <MapPinIcon size={15} />
                  <span>Chicago, IL</span>
                </div>
                <div className="info-item">
                  <BookOpenIcon size={15} />
                  <span>M.S. Computer Science</span>
                </div>
                <div className="info-item">
                  <BriefcaseIcon size={15} />
                  <span>Open to opportunities</span>
                </div>
                <div className="info-item">
                  <MailIcon size={15} />
                  <span>mljuboja21@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right column: bio + highlights */}
            <div className="about-bio">
              <h2>Nice to meet you.</h2>
              <p>
                I'm a graduate student in Computer Science at DePaul University
                with a passion for building software that's clean, functional,
                and user-friendly. My background includes coursework in data
                structures, algorithms, software engineering, and web
                development.
              </p>
              <p>
                Before grad school, I earned my undergraduate degree and
                developed a strong foundation in programming and problem-solving.
                I enjoy working across the full stack and I'm always looking to
                learn new tools and technologies.
              </p>
              <p>
                Outside of coding, I enjoy following tech trends, contributing
                to open-source projects when I can, and working on personal
                projects that challenge me to grow as a developer.
              </p>

              <div className="about-highlights">
                <div className="highlight-card">
                  <div className="number">5+</div>
                  <div className="label">Projects Completed</div>
                </div>
                <div className="highlight-card">
                  <div className="number">3+</div>
                  <div className="label">Years Coding</div>
                </div>
                <div className="highlight-card">
                  <div className="number">2026</div>
                  <div className="label">Graduated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
