import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ChevronDown, Sun, Moon } from 'lucide-react'
import { experience, profile, projects, research } from './data'

function ProjectPreview({ variant }: { variant: 'procureiq' | 'semred' }) {
  if (variant === 'procureiq') return <div className="preview preview-procure" aria-hidden="true">
    <div className="preview-top"><span>PROCURE<span className="accent">IQ</span></span><span>SYNTHETIC DATA · DEMO</span></div>
    <div className="preview-title">Spend overview <span>Q3 / FY26</span></div>
    <div className="preview-metric"><strong>$2.84m</strong><span>tracked spend</span><div className="spark"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
    <div className="preview-lines"><span>Supplier</span><span>Category</span><span>Spend</span></div>
    <div className="preview-lines row"><span>Northstar Co.</span><span>Operations</span><span>$840k</span></div>
    <div className="preview-lines row"><span>Meridian Group</span><span>Technology</span><span>$612k</span></div>
    <div className="preview-lines row"><span>Commonwell Inc.</span><span>Services</span><span>$394k</span></div>
  </div>
  return <div className="preview preview-semred" aria-hidden="true">
    <div className="preview-top"><span>SEMRED <span className="preview-muted">/ DOCUMENT REVIEW</span></span><span>02 OF 04</span></div>
    <div className="document-lines"><b>Mutual Services Agreement</b><span>1. Scope of Services</span><span>The parties agree to the terms set forth in this document...</span><span>2. Authorized Personnel</span><span>Access shall be limited to the individuals listed in <mark>Schedule A</mark>.</span><span>3. Data Handling</span><span>All personal information shall be stored and processed...</span></div>
    <div className="redaction-note"><span className="redaction-block"/> Rule: personal identifiers <span className="review-label">REVIEW</span></div>
  </div>
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [expanded, setExpanded] = useState<string | null>(null)
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="topbar wrap">
      <a href="#top" className="wordmark" aria-label="Ehaan Sair, home">ES<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#research">Research</a></nav>
      <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun size={15}/> : <Moon size={15}/>}<span>{dark ? 'Light' : 'Dark'}</span></button>
    </header>

    <main id="main" className="wrap">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-index">CORNELL UNIVERSITY <span className="hero-year">/ PUBLIC POLICY</span></div>
        <h1 id="hero-title">{profile.name}<span className="period">.</span></h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="hero-note">A student of public policy, interested in entrepreneurship, business strategy, AI, and technology policy.</p>
        <div className="hero-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={13}/></a><a href={profile.resume} download>Resume <ArrowDownRight size={13}/></a></div>
        <div className="hero-bottom"><span>ITHACA, NEW YORK</span><a href="#about">01 — ABOUT <ArrowDownRight size={13}/></a></div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label"><span>01</span><span>About</span></div>
        <div className="section-body about-copy"><p>I study Public Policy at Cornell University, where I think about the ways technology and institutions shape everyday life.</p><p>Outside the classroom, I’m interested in entrepreneurship, business strategy, and artificial intelligence—and in asking what thoughtful progress looks like when those worlds meet.</p><div className="small-note">CURRENTLY THINKING ABOUT <span>↳</span> TECHNOLOGY &amp; PUBLIC LIFE</div></div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-label"><span>02</span><span>Selected work</span><span className="label-aside">A FEW THINGS IN PROGRESS</span></div>
        <div className="section-body projects-list">{projects.map((project) => <article className={`project ${expanded === project.id ? 'is-open' : ''}`} key={project.id}>
          <button className="project-trigger" aria-expanded={expanded === project.id} aria-controls={`${project.id}-details`} onClick={() => setExpanded(expanded === project.id ? null : project.id)}>
            <div className="project-meta"><span>{project.number} / {project.status}</span><ChevronDown size={15} className="chevron"/></div>
            <div className="project-main"><div><h3>{project.name}</h3><p className="project-type">{project.type}</p></div><p className="project-summary">{project.summary}</p></div>
          </button>
          <div className="project-preview-wrap">{project.screenshots?.length ? project.screenshots.map((shot) => <img className="project-screenshot" key={shot.src} src={shot.src} alt={shot.alt} loading="lazy"/>) : <ProjectPreview variant={project.id as 'procureiq' | 'semred'}/>}</div>
          {expanded === project.id && <div className="project-details" id={`${project.id}-details`}><p>{project.details}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer">OPEN LIVE DEMO ↗</a> : <span>DEMO LINK TO BE ADDED</span>}<span>ADD SCREENSHOTS IN src/data.ts</span></div></div>}
        </article>)}</div>
      </section>

      <section id="experience" className="section">
        <div className="section-label"><span>03</span><span>Experience</span><span className="label-aside">A FEW RECENT CHAPTERS</span></div>
        <div className="section-body timeline">{experience.map((item, i) => <div className="experience-row" key={`${item.org}-${item.role}`}><span className="timeline-index">0{i + 1}</span><div className="experience-main"><h3>{item.org}</h3><p>{item.role}</p></div><span className="experience-dates">{item.dates}</span></div>)}</div>
      </section>

      <section id="research" className="section research-section">
        <div className="section-label"><span>04</span><span>Research</span></div>
        <div className="section-body research-copy"><span className="research-kicker">{research.heading}</span><p>{research.description}</p>{research.publicationUrl ? <a className="text-link" href={research.publicationUrl} target="_blank" rel="noreferrer">Read the publication <ArrowUpRight size={13}/></a> : <span className="publication-placeholder">PUBLICATION LINK TO BE ADDED <span>↗</span></span>}</div>
      </section>

      <section id="contact" className="contact-section">
        <div><span className="contact-kicker">05 / GET IN TOUCH</span><h2>Have a good question?<br/><span>I'm listening.</span></h2></div>
        <div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={14}/></a><a href={profile.resume} download>Download resume<ArrowDownRight size={14}/></a></div>
      </section>
    </main>
    <footer className="wrap footer"><span>© {new Date().getFullYear()} EHAAN SAIR</span><span>MADE WITH CURIOSITY <span className="footer-star">✳</span></span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>
}

export default App
