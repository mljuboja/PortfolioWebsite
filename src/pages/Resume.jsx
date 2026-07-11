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
                  <li>M.S. Computer Science — DePaul University (2023–2025)</li>
                  <li>B.S. Applied Mathematics — Washington State University (2011-2014)</li>
                </ul>
              </div>
              <div className="resume-highlight">
                <h4>Experience</h4>
                <ul className="resume-list">
                  <li>Assistant Manager at Nikamar LLC (2018-2023)</li>
                  <li>Collision Expeditor at Wheels Inc. (2016-2017)</li>
                  <li>Inside Sales at Unitec Trading Company (2007-2013)</li>
                </ul>
              </div>
              <div className="resume-highlight">
                <h4>Key Courses</h4>
                <ul className="resume-list">
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Object-Oriented Software Development</li>
                  <li>Database Systems</li>
                  <li>Continuous Delivery/DevOps</li>
                  <li>Software Architecture</li>
                  <li>Software Testing and Quality Assurance</li>
                  <li>Agile Software Development</li>
                  <li>Object-Oriented Enterprise Computing</li>
                  <li>Distributed Systems</li>
                </ul>
              </div>
              <div className="resume-highlight">
                <h4>Organizations</h4>
                <ul className="resume-list">
                  <li>Golden Key International Honor Society Member</li>
                  <li>Honor Society of Upsilon Pi Epsilon Member</li>
                </ul>
              </div>
            </div>
          </div>
      </section>
    </main>
  )
}


export default Resume
