import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGitBranch, FiSearch, FiStar } from 'react-icons/fi'
import { useGitHubRepos } from '../hooks/useGitHubRepos.js'
import ProjectModal from './ProjectModal.jsx'

function SkeletonCard() {
  return <div className="h-44 animate-pulse rounded-2xl border border-slate-700 bg-slate-800/60" />
}

export default function Projects() {
  const { repos, loading, error, searchTerm, setSearchTerm } = useGitHubRepos()
  const [activeRepo, setActiveRepo] = useState(null)

  const cards = useMemo(
    () =>
      repos.map((repo) => (
        <motion.button
          className="group rounded-2xl border border-slate-700 bg-slate-900/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-900"
          key={repo.id}
          onClick={() => setActiveRepo(repo)}
          type="button"
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="line-clamp-1 text-lg font-semibold text-white">{repo.name}</h3>
            {repo.language ? (
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                {repo.language}
              </span>
            ) : null}
          </div>
          <p className="mt-3 line-clamp-2 text-sm text-slate-300">
            {repo.description || 'No description available.'}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1">
              <FiStar /> {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiGitBranch /> {repo.forks_count}
            </span>
            <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </motion.button>
      )),
    [repos],
  )

  return (
    <section className="section" id="projects">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="section-title">Projects</h2>
          <label className="flex w-full items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-300 md:w-80">
            <FiSearch />
            <input
              className="w-full bg-transparent outline-none"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name or language"
              value={searchTerm}
            />
          </label>
        </div>

        {error ? <p className="mt-6 text-red-400">{error}</p> : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />) : cards}
        </div>
      </div>
      <ProjectModal onClose={() => setActiveRepo(null)} repo={activeRepo} />
    </section>
  )
}
