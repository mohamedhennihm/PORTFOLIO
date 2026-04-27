import { useEffect, useMemo, useState } from 'react'

const GITHUB_USERNAME = 'mohamedhennihm'
const REPOS_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    let active = true

    async function loadRepos() {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(REPOS_ENDPOINT)
        if (!response.ok) throw new Error('Unable to fetch repositories right now.')
        const data = await response.json()
        if (!active) return
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        setRepos(filtered)
      } catch (err) {
        if (!active) return
        setError(err.message)
      } finally {
        if (active) setLoading(false)
      }
    }

    loadRepos()
    return () => {
      active = false
    }
  }, [])

  const visibleRepos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return repos
    return repos.filter((repo) => {
      const name = repo.name.toLowerCase()
      const language = (repo.language || '').toLowerCase()
      return name.includes(query) || language.includes(query)
    })
  }, [repos, searchTerm])

  return {
    repos: visibleRepos,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    username: GITHUB_USERNAME,
  }
}

export async function fetchRepoReadme(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
    },
  })

  if (!response.ok) {
    return 'README not available for this repository.'
  }

  const markdown = await response.text()
  return markdown.slice(0, 3000)
}
