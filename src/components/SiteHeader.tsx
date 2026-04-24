import { Link } from 'react-router-dom'

export function SiteHeader({
  onSectionNav,
}: {
  onSectionNav: (sectionId: string) => void
}) {
  return (
    <header className="workbench-bar">
      <Link className="brand" to="/">
        <span className="brand__mark">SS</span>
        <span className="brand__text">sadman.shahriar</span>
      </Link>

      <nav className="topnav" aria-label="Primary">
        <button type="button" onClick={() => onSectionNav('work')}>
          projects
        </button>
        <button type="button" onClick={() => onSectionNav('strengths')}>
          strengths
        </button>
        <button type="button" onClick={() => onSectionNav('experience')}>
          experience
        </button>
        <button type="button" onClick={() => onSectionNav('contact')}>
          contact
        </button>
      </nav>

      <div className="workbench-bar__meta">
        <span>new grad / backend + full-stack</span>
        <a
          className="meta-link"
          href="https://www.linkedin.com/in/sadmansni"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
    </header>
  )
}
