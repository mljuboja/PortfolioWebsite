const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Vite'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  },
  {
    id: 'concepts',
    title: 'Concepts',
    skills: [
      'REST APIs',
      'Responsive Design',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Version Control',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MySQL', 'SQLite', 'Firebase'],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    skills: ['TypeScript', 'Docker', 'Testing (Jest)'],
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
