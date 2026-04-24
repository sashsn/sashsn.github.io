import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { CodeLine } from '../components/CodeLine'
import { ProjectCard } from '../components/ProjectCard'
import {
  RevealSection,
  SectionHeading,
  WindowChrome,
  fadeUp,
  pageTransition,
} from '../components/Ui'
import type { HomeState } from '../App'
import {
  archiveEntries,
  consoleEvents,
  experienceCards,
  focusModes,
  heroFacts,
  projects,
  type FocusKey,
  workbenchFiles,
} from '../siteData'

const heroCodeLines = [
  'const candidate = {',
  "  degree: 'software engineering',",
  "  status: 'new grad',",
  "  experience: 'suncor internship',",
  "  interests: 'backend + data + embedded',",
  "  seeking: 'software roles',",
  '}',
]

const strengthKeys: FocusKey[] = ['backend', 'data', 'embedded', 'delivery']

export function HomePage({
  onSectionNav,
}: {
  onSectionNav: (sectionId: string) => void
}) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const state = location.state as HomeState | null
    if (!state?.scrollTo) {
      return
    }

    window.setTimeout(() => {
      document.getElementById(state.scrollTo!)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)

    navigate(location.pathname, { replace: true, state: null })
  }, [location.pathname, location.state, navigate])

  const candidateSummary = [
    {
      label: 'Education',
      value: 'Apr 2026',
      detail: 'B.Sc. in Software Engineering, University of Calgary',
      action: 'experience',
    },
    {
      label: 'Internship',
      value: 'Suncor',
      detail: 'Software Engineering Intern with data + automation work at Syncrude Upgrading Automation',
      action: 'experience',
    },
    {
      label: 'Portfolio',
      value: `${projects.length} projects`,
      detail: 'Full-stack, data + ML, embedded, and team projects across case studies',
      action: 'work',
    },
  ]

  return (
    <motion.main
      className="page page--home"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="hero" id="top">
        <motion.div
          className="window-shell window-shell--editor"
          variants={fadeUp}
          whileHover={{ y: -4 }}
        >
          <WindowChrome tabs={['about.md', 'summary.json']} mode="candidate profile" />

          <div className="editor-layout">
            <aside className="editor-sidebar">
              <p className="editor-sidebar__title">Navigation</p>
              <ul>
                {workbenchFiles.map((file) => (
                  <li key={file.label}>
                    <button type="button" onClick={() => onSectionNav(file.target)}>
                      {file.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="editor-main">
              <motion.div
                className="code-card"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.66, delay: 0.18 }}
              >
                <div className="code-card__gutter">
                  {heroCodeLines.map((_, index) => (
                    <span key={index}>0{index + 1}</span>
                  ))}
                </div>

                <div className="code-card__content">
                  {heroCodeLines.map((line, index) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.14 + index * 0.08, duration: 0.45 }}
                    >
                      <CodeLine line={line} />
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              <motion.div className="hero-copy" variants={fadeUp}>
                <p className="eyebrow">Software engineering new grad</p>
                <h1>
                  Recent software engineering graduate
                  <span> focused on backend, data,</span>
                  <em> embedded, and full-stack systems.</em>
                </h1>
                <p className="hero__lede">
                  I am a University of Calgary software engineering new grad with
                  internship experience at Suncor, research assistant work, and
                  project experience across APIs, databases, machine learning, and
                  embedded systems. I am applying for full-time software roles
                  where I can contribute on backend, full-stack, or data-adjacent
                  teams.
                </p>

                <div className="hero__facts">
                  {heroFacts.map((fact, index) => (
                    <motion.span
                      key={fact}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.32 + index * 0.08 }}
                    >
                      {fact}
                    </motion.span>
                  ))}
                </div>

                <div className="hero__actions">
                  <motion.button
                    type="button"
                    className="button button--primary"
                    onClick={() => onSectionNav('work')}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    view projects
                  </motion.button>
                  <motion.button
                    type="button"
                    className="button button--ghost"
                    onClick={() => onSectionNav('experience')}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    experience
                  </motion.button>
                  <motion.a
                    className="button button--ghost"
                    href="https://www.linkedin.com/in/sadmansni"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    linkedin
                  </motion.a>
                  <motion.a
                    className="button button--ghost"
                    href="https://github.com/sashsn"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    github
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="window-shell window-shell--console window-shell--summary"
          variants={fadeUp}
          transition={{ delay: 0.12 }}
        >
          <WindowChrome tabs={['summary.md', 'links.txt']} mode="at a glance" />

          <div className="console-panel">
            <div className="console-log">
              {consoleEvents.map((event, index) => (
                <motion.p
                  key={event}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + index * 0.1 }}
                >
                  {event}
                </motion.p>
              ))}
            </div>

            <div className="runtime-grid">
              {candidateSummary.map((item) => (
                <motion.article
                  className="runtime-card"
                  key={item.label}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 16 }}
                >
                  <p className="runtime-card__label">{item.label}</p>
                  <h2>{item.value}</h2>
                  <p>{item.detail}</p>
                  <button
                    type="button"
                    className="inline-link inline-link--button"
                    onClick={() => onSectionNav(item.action)}
                  >
                    learn more
                  </button>
                </motion.article>
              ))}
            </div>

            <div className="console-stack">
              {['typescript', 'python', 'express', 'postgresql', 'react', 'sql', 'c', 'ml'].map(
                (item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                  >
                    {item}
                  </motion.span>
                ),
              )}
            </div>
          </div>
        </motion.aside>
      </section>

      <RevealSection className="window-shell window-shell--experience" id="experience">
        <WindowChrome tabs={['experience.md']} />
        <div className="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Internship and research work that shaped how I build software."
          />

          <div className="experience-grid">
            {experienceCards.map((card) => (
              <motion.article
                className="experience-card"
                key={card.title}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              >
                <p className="experience-card__role">{card.role}</p>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
                <a
                  className="inline-link"
                  href={card.link}
                  target={card.link.startsWith('http') ? '_blank' : undefined}
                  rel={card.link.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {card.linkLabel}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="window-shell window-shell--focus" id="strengths">
        <WindowChrome tabs={['strengths.md', 'areas.json']} />
        <div className="focus-panel">
          <SectionHeading
            eyebrow="Strengths"
            title="Technical areas I have worked in and want to keep growing in."
          />

          <div className="strength-grid">
            {strengthKeys.map((key) => (
              <motion.article
                className="strength-card"
                key={key}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              >
                <p className="focus-panel__kicker">{focusModes[key].stat}</p>
                <h3>{focusModes[key].title}</h3>
                <p>{focusModes[key].description}</p>
                <p className="focus-panel__callout">{focusModes[key].callout}</p>
                <ul>
                  {focusModes[key].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </RevealSection>

      <section className="projects" id="work">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies across backend, data + ML, embedded, and full-stack work."
          description="Each project page focuses on systems, data, implementation details, and artifacts behind the build — not just screenshots."
        />

        <div className="project-grid project-grid--wide">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {archiveEntries.length > 0 ? (
        <RevealSection className="window-shell">
          <WindowChrome tabs={['archive.txt']} />
          <div className="related-projects">
            <SectionHeading
              eyebrow="Project archive"
              title="Older projects with artifacts still being recovered."
              description="Some earlier work was not preserved carefully at the time. Rather than faking case studies, these stay as honest placeholders until the source material is back together."
            />

            <div className="related-projects__grid">
              {archiveEntries.map((entry) => (
                <motion.article
                  className="related-card"
                  key={entry.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                >
                  <p className="project-card__eyebrow">{entry.status}</p>
                  <h3>{entry.title}</h3>
                  <p>{entry.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </RevealSection>
      ) : null}

      <RevealSection className="window-shell window-shell--contact" id="contact">
        <WindowChrome tabs={['contact.txt']} />
        <div className="contact">
          <p className="eyebrow">Contact</p>
          <h2>I am currently applying for full-time software roles.</h2>
          <p>
            If you would like to talk about new graduate opportunities, backend or
            full-stack roles, or any of the work on this site, feel free to reach
            out.
          </p>

          <div className="terminal-commands">
            <a href="mailto:sadmanshahriar.snigd@ucalgary.ca">
              $ email sadmanshahriar.snigd@ucalgary.ca
            </a>
            <a href="https://www.linkedin.com/in/sadmansni" target="_blank" rel="noreferrer">
              $ open linkedin.com/in/sadmansni
            </a>
            <a href="https://github.com/sashsn" target="_blank" rel="noreferrer">
              $ open github.com/sashsn
            </a>
          </div>

          <div className="contact__actions">
            <a href="mailto:sadmanshahriar.snigd@ucalgary.ca">
              sadmanshahriar.snigd@ucalgary.ca
            </a>
            <a
              href="https://www.linkedin.com/in/sadmansni"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
            <a href="https://github.com/sashsn" target="_blank" rel="noreferrer">
              github
            </a>
          </div>
        </div>
      </RevealSection>
    </motion.main>
  )
}
