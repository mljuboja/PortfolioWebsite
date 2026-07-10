import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-socials">
          <a
            href="https://github.com/mljuboja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/marina-ljuboja-34247412"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:mljuboja21@gmail.com" aria-label="Email">
            <MailIcon size={20} />
          </a>
        </div>
        <p>© {year} Marina Ljuboja · Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}

export default Footer
