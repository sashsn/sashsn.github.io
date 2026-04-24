import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  RevealSection,
  SectionHeading,
  WindowChrome,
  fadeUp,
  pageTransition,
} from '../components/Ui'
import { projectIndex, projects } from '../siteData'

export function ProjectPage({
  onSectionNav,
}: {
  onSectionNav: (sectionId: string) => void
}) {
  const { slug } = useParams()

  if (!slug || !projectIndex[slug]) {
    return <Navigate to="/" replace />
  }

  const project = projectIndex[slug]
  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3)

  return (
    <motion.main
      className="page page--project"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="project-page-hero">
        <motion.div className="window-shell" variants={fadeUp}>
          <WindowChrome tabs={['overview.md', 'project-summary.json']} mode={project.status} />
          <div className="project-page__summary">
            <div className="breadcrumbs">
              <Link to="/">home</Link>
              <span>/</span>
              <button type="button" onClick={() => onSectionNav('work')}>
                work
              </button>
              <span>/</span>
              <span>{project.title}</span>
            </div>

            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="project-page__title">{project.title}</h1>
            <p className="project-page__lede">{project.caseStudySummary}</p>

            <div className="project-meta-grid">
              <div>
                <span>role</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>period</span>
                <strong>{project.period}</strong>
              </div>
              <div>
                <span>status</span>
                <strong>{project.status}</strong>
              </div>
            </div>

            <div className="project-page__actions">
              <button
                type="button"
                className="button button--primary"
                onClick={() => onSectionNav('work')}
              >
                back to projects
              </button>
              {project.links.map((link) => (
                <a
                  className="button button--ghost"
                  key={link.label}
                  href={link.url}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside className="window-shell window-shell--console" variants={fadeUp}>
          <WindowChrome tabs={['snapshot.md', 'metrics.json']} mode="project snapshot" />
          <div className="console-panel">
            <div className="console-log">
              {project.consoleLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.09 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="runtime-grid">
              {project.metrics.map((metric) => (
                <motion.article
                  className="runtime-card"
                  key={metric.label}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 16 }}
                >
                  <p className="runtime-card__label">{metric.label}</p>
                  <h2>{metric.value}</h2>
                  <p>{metric.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.aside>
      </section>

      <RevealSection className="window-shell">
        <WindowChrome tabs={['fit.md', 'highlights.txt']} />
        <div className="project-story">
          <SectionHeading
            eyebrow="Project fit"
            title="Why this project is included and what it demonstrates."
          />

          <div className="project-story__grid">
            <motion.article
              className="story-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            >
              <p className="story-card__eyebrow">Why it is here</p>
              <p>{project.whyThisProject}</p>
            </motion.article>

            <motion.article
              className="story-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            >
              <p className="story-card__eyebrow">What I contributed</p>
              <p>{project.contributionSummary}</p>
            </motion.article>

            <motion.article
              className="story-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            >
              <p className="story-card__eyebrow">Key takeaways</p>
              <ul className="highlight-list highlight-list--tight">
                {project.projectBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </RevealSection>

      {project.gallery.length > 0 ? (
        <RevealSection className="window-shell">
          <WindowChrome tabs={['artifacts.tsx', 'media.json']} />
          <div className="project-gallery">
            {project.gallery.map((item, index) => (
              <motion.figure
                className={
                  index === 0
                    ? item.fit === 'contain'
                      ? 'gallery-card gallery-card--wide gallery-card--contain'
                      : 'gallery-card gallery-card--wide'
                    : item.fit === 'contain'
                      ? 'gallery-card gallery-card--contain'
                      : 'gallery-card'
                }
                key={item.src}
                whileHover={{ y: -12, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              >
                <img
                  className={item.fit === 'contain' ? 'gallery-card__image--contain' : ''}
                  src={item.src}
                  alt={item.alt}
                />
                <figcaption>
                  <strong>{project.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </RevealSection>
      ) : null}

      {project.code && project.code.length > 0 ? (
        <RevealSection className="window-shell">
          <WindowChrome tabs={['source.tsx', 'snippets.md']} mode="selected source" />
          <div className="project-source">
            <SectionHeading
              eyebrow="Source"
              title="A slice of the code behind the project."
              description="Excerpts, not the whole tree. Chosen to show how the hard parts are structured."
            />

            <div className="project-source__stack">
              {project.code.map((snippet) => (
                <motion.article
                  className="code-snippet"
                  key={snippet.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                >
                  <header className="code-snippet__header">
                    <span className="code-snippet__lang">{snippet.language}</span>
                    <strong className="code-snippet__title">{snippet.title}</strong>
                  </header>
                  <pre className="code-snippet__body">
                    <code>{snippet.source}</code>
                  </pre>
                  {snippet.caption ? (
                    <p className="code-snippet__caption">{snippet.caption}</p>
                  ) : null}
                </motion.article>
              ))}
            </div>
          </div>
        </RevealSection>
      ) : null}

      <RevealSection className="window-shell">
        <WindowChrome tabs={['engineering-notes.md', 'details.ts']} />
        <div className="project-story">
          <SectionHeading
            eyebrow="Engineering breakdown"
            title="How the project was scoped, built, and evaluated."
          />

          <div className="project-story__grid">
            {project.story.map((card) => (
              <motion.article
                className="story-card"
                key={card.title}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              >
                <p className="story-card__eyebrow">{card.title}</p>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="window-shell">
        <WindowChrome tabs={['stack.lock', 'contributions.md']} />
        <div className="project-deep-dive">
          <div className="deep-dive-panel">
            <p className="eyebrow">Stack</p>
            <div className="chip-cloud">
              {project.stack.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="deep-dive-panel">
            <p className="eyebrow">What I worked on</p>
            <ul className="highlight-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="window-shell">
        <WindowChrome tabs={['more-projects.tsx']} />
        <div className="related-projects">
          <SectionHeading
            eyebrow="More work"
            title="Other projects in this portfolio."
          />

          <div className="related-projects__grid">
            {relatedProjects.map((item) => (
              <motion.article
                className="related-card"
                key={item.slug}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              >
                <p className="project-card__eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.homeSummary}</p>
                <Link className="inline-link" to={`/projects/${item.slug}`}>
                  view project
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </RevealSection>
    </motion.main>
  )
}
