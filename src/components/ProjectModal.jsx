import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import { fetchRepoReadme } from '../hooks/useGitHubRepos.js'

export default function ProjectModal({ repo, onClose }) {
  const [readme, setReadme] = useState('Loading README...')

  useEffect(() => {
    if (!repo) return
    fetchRepoReadme(repo.owner.login, repo.name).then(setReadme)
  }, [repo])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!repo) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-2xl border border-slate-700 bg-slate-900 p-6"
        initial={{ opacity: 0, y: 25 }}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{repo.name}</h3>
            <p className="mt-1 text-slate-300">{repo.description || 'No description provided.'}</p>
          </div>
          <button className="rounded p-2 text-slate-300 hover:bg-slate-800" onClick={onClose} type="button">
            <FiX size={18} />
          </button>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {(repo.topics || []).map((topic) => (
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300" key={topic}>
              {topic}
            </span>
          ))}
        </div>
        <div className="mb-5 flex flex-wrap gap-3">
          <a className="btn-secondary" href={repo.html_url} rel="noreferrer" target="_blank">
            <FiGithub /> Repository
          </a>
          {repo.homepage ? (
            <a className="btn-secondary" href={repo.homepage} rel="noreferrer" target="_blank">
              <FiExternalLink /> Live Demo
            </a>
          ) : null}
        </div>
        <div className="prose prose-invert max-w-none rounded-xl border border-slate-800 bg-slate-950/70 p-4">
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  )
}
