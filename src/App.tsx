import { experience, profile, projects, research } from './data'

function App() {
  return (
    <div className="page-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>

      <main className="page" id="main">
        <header className="intro" aria-labelledby="site-title">
          <h1 id="site-title">{profile.name}</h1>
          <p className="subtitle">Student at Cornell University.</p>
          <p className="links">
            <a href={`mailto:${profile.email}`}>email</a>
            <span aria-hidden="true"> / </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
            <span aria-hidden="true"> / </span>
            <a href={profile.resume} download>resume</a>
          </p>
        </header>

        <nav className="section-nav" aria-label="Sections">
          <a href="#about">about</a><span aria-hidden="true"> / </span>
          <a href="#projects">projects</a><span aria-hidden="true"> / </span>
          <a href="#experience">experience</a><span aria-hidden="true"> / </span>
          <a href="#research">research</a>
        </nav>

        <section className="section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">[ about ]</h2>
          <p>{profile.about}</p>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">[ projects ]</h2>
          <ul className="plain-list">
            {projects.map((project) => (
              <li key={project.id}>
                <p>
                  <span className="item-title">{project.name}</span> — {project.description}
                  {project.demoUrl && <> <a href={project.demoUrl} target="_blank" rel="noreferrer">live demo</a></>}
                  {project.workbookUrl && <> <a href={project.workbookUrl} download>view workbook</a></>}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">[ experience ]</h2>
          <ul className="plain-list experience-list">
            {experience.map((item) => (
              <li key={`${item.org}-${item.role}`}>
                <span className="item-title">{item.org}</span>
                <span className="experience-role">{item.role}</span>
                <span className="muted">{item.dates}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="research" aria-labelledby="research-title">
          <h2 id="research-title">[ research ]</h2>
          <p>{research.description}</p>
          <p className="research-additional">{research.additional}</p>
          {research.publicationUrl && (
            <p className="research-link"><a href={research.publicationUrl} target="_blank" rel="noreferrer">read the paper</a></p>
          )}
        </section>

        <footer className="footer" id="contact">
          <span>© {new Date().getFullYear()} Ehaan Sair</span>
        </footer>
      </main>
    </div>
  )
}

export default App
