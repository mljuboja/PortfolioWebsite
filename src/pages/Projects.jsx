import { CodeIcon, GithubIcon, ExternalLinkIcon } from '../components/Icons'

const PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'This portfolio site — built with React, Vite, and vanilla CSS. Features client-side routing via React Router and is deployed on GitHub Pages.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'GitHub Pages'],
    github: 'https://github.com/mljuboja/PortfolioWebsite',
    live: null,
  },
  {
    id: 2,
    title: 'Calendar App',
    description:
      'A calendar application with add, filter, and delete functions. Uses localStorage for persistence across sessions.',
    tags: ['React', 'Hooks', 'LocalStorage', 'CSS'],
    github: 'https://github.com/yourusername/task-manager',
    live: null,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather app that fetches real-time data from the OpenWeatherMap API and displays current conditions and a 5-day forecast for any city.',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS', 'Fetch API'],
    github: 'https://github.com/yourusername/weather-app',
    live: null,
  },
  {
    id: 4,
    title: 'Student Grade Calculator',
    description:
      'A Java console application for computing weighted averages across assignments, quizzes, and exams, with grade distribution output.',
    tags: ['Java', 'OOP', 'CLI'],
    github: 'https://github.com/yourusername/grade-calculator',
    live: null,
  },
]

const Projects = () => {
  return (
    <main className="page-content">
      <section className="section projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">
              A selection of things I've built. Each project helped me learn
              something new.
            </p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-header">
                  <div className="project-icon">
                    <CodeIcon size={22} />
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLinkIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
