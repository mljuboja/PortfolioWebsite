import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:you@example.com" aria-label="Email">
            <MailIcon size={20} />
          </a>
        </div>
        <p>© {year} Your Name · Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}

export default Footer
