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
            <h2 className="section-title">Resume Highlights</h2>
          </div>


            <div className="resume-highlights">
              <div className="resume-highlight">
                <h4>Education</h4>
                <ul className="resume-list">
                  <li>M.S. Computer Science — DePaul University (2024–2026)</li>
                  <li>B.S. Applied Mathematics — Washington State University (2011-2014)</li>
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
      </section>
    </main>
  )
}

export default Resume
