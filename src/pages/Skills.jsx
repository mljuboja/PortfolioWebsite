const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['C', 'Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    skills: ['React', 'Tailwind CSS', 'Spring Boot', 'JUnit', 'Selenium'],
  },
  {
    id: 'platforms',
    title: 'Platforms & Technologies',
    skills: ['Node.js', 'RESTful APIs', 'Microsoft Azure'],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Vite', 'npm', 'VS Code', 'Figma', 'Docker'],
  },
  {
    id: 'concepts',
    title: 'Concepts',
    skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Version Control'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
]

const Skills = () => {
  return (
    <main className="page-content">
      <section className="section skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Skills</h2>
            <p className="section-desc">
              Technologies and tools I work with. Still learning every day.
            </p>
          </div>

          <div className="skills-grid">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.id} className="skills-category">
                <h3>{category.title}</h3>
                <div className="skill-badges">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Skills
