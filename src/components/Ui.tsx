import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const pageTransition = {
  initial: { opacity: 0, y: 28, filter: 'blur(12px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.62,
      ease: 'easeOut' as const,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: 'blur(12px)',
    transition: {
      duration: 0.28,
      ease: 'easeIn' as const,
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: 'easeOut' as const },
  },
}

export const hoverLift = {
  whileHover: {
    y: -10,
    scale: 1.01,
    transition: { type: 'spring' as const, stiffness: 280, damping: 20 },
  },
}

export function RevealSection({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <motion.section
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  )
}

export function WindowChrome({
  tabs,
  mode,
}: {
  tabs: string[]
  mode?: string
}) {
  return (
    <div className="window-shell__chrome">
      <div className="chrome-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="window-tabs">
        {tabs.map((tab, index) => (
          <span className={index === 0 ? 'is-active' : undefined} key={tab}>
            {tab}
          </span>
        ))}
      </div>

      {mode ? <span className="window-shell__mode">{mode}</span> : null}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}
