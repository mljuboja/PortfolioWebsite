import { Link } from 'react-router-dom'
import { GithubIcon, LinkedinIcon, ArrowRightIcon } from '../components/Icons'

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content container">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Marina Ljuboja</h1>
          <h2 className="hero-title">
            Computer Science Graduate Student &amp; Aspiring Software Engineer
          </h2>
          <p className="hero-description">
            I build clean, purposeful software with a focus on solving real
            problems. Currently completing my M.S. in Computer Science at DePaul
            University and actively seeking opportunities in software
            engineering.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Projects <ArrowRightIcon size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              Get In Touch
            </Link>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/mljuboja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/marina-ljuboja-34247412"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
