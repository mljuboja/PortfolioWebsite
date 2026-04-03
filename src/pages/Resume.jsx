import { DownloadIcon, ExternalLinkIcon } from '../components/Icons'

// Replace RESUME_URL with the actual link to your hosted resume PDF.
// Options: Google Drive shared link, Dropbox, or a file in /public folder.
const RESUME_URL = '/PortfolioWebsite/resume.pdf'

const Resume = () => {
  return (
    <main className="page-content">
      <section className="section resume-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Career</span>
            <h2 className="section-title">Resume</h2>
          </div>

          <div className="resume-container">
            <div className="resume-cta-card">
              <h3>Want a copy?</h3>
              <p>
                Download my resume as a PDF or open it in your browser. Last
                updated April 2026.
              </p>
              <div className="resume-actions">
                <a
                  href={RESUME_URL}
                  download
                  className="btn btn-primary"
                >
                  <DownloadIcon size={16} />
                  Download PDF
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <ExternalLinkIcon size={15} />
                  View Online
                </a>
              </div>
            </div>

            <div className="resume-highlights">
              <div className="resume-highlight">
                <h4>Education</h4>
                <ul className="resume-list">
                  <li>M.S. Computer Science — DePaul University (2024–2026)</li>
                  <li>B.S. [Your Undergraduate Degree]</li>
                </ul>
              </div>
              <div className="resume-highlight">
                <h4>Experience</h4>
                <ul className="resume-list">
                  <li>[Role] at [Company] (Dates)</li>
                  <li>[Role] at [Company] (Dates)</li>
                  <li>Teaching / research assistant (if applicable)</li>
                </ul>
              </div>
              <div className="resume-highlight">
                <h4>Key Courses</h4>
                <ul className="resume-list">
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Software Engineering</li>
                  <li>Database Systems</li>
                  <li>Web Development</li>
                </ul>
              </div>
              <div className="resume-highlight">
                <h4>Activities</h4>
                <ul className="resume-list">
                  <li>Open-source contributor</li>
                  <li>Hackathon participant</li>
                  <li>[Club or org name]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resume
