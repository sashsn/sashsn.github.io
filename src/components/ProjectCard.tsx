import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hoverLift, WindowChrome } from './Ui'
import type { Project } from '../siteData'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="window-shell project-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.54 }}
      {...hoverLift}
    >
      <WindowChrome tabs={['project.md']} />
      <div className="project-card__body">
        <p className="project-card__eyebrow">{project.eyebrow}</p>
        <Link className="project-card__title" to={`/projects/${project.slug}`}>
          <h3>{project.title}</h3>
        </Link>
        <p>{project.homeSummary}</p>

        {project.gallery[0] ? (
          <Link
            className={
              project.gallery[0].fit === 'contain'
                ? 'project-card__media project-card__media--contain'
                : 'project-card__media'
            }
            to={`/projects/${project.slug}`}
          >
            <img
              className={
                project.gallery[0].fit === 'contain' ? 'project-card__image--contain' : ''
              }
              src={project.gallery[0].src}
              alt={project.gallery[0].alt}
            />
            <span>case study</span>
          </Link>
        ) : null}

        <div className="project-card__chips">
          {project.chips.slice(0, 3).map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <Link className="button button--primary" to={`/projects/${project.slug}`}>
            case study
          </Link>
          {project.links.slice(0, 1).map((link) => (
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
    </motion.article>
  )
}
