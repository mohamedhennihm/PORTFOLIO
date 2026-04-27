import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme.js'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setIsShrunk(window.scrollY > 24)
      for (const link of links) {
        const section = document.getElementById(link.id)
        if (!section) continue
        const bounds = section.getBoundingClientRect()
        if (bounds.top <= 120 && bounds.bottom >= 120) {
          setActiveSection(link.id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-700/30 bg-slate-950/70 backdrop-blur transition-all dark:bg-slate-900/70 ${
        isShrunk ? 'py-2' : 'py-4'
      }`}
      initial={{ y: -40, opacity: 0 }}
    >
      <div className="mx-auto flex w-[min(1100px,92%)] items-center justify-between">
        <a className="text-lg font-bold text-cyan-400" href="#hero">
          Mohamed Portfolio
        </a>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-3 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  className={`rounded-md px-3 py-2 text-sm transition hover:text-cyan-400 ${
                    activeSection === link.id ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300'
                  }`}
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-label="Toggle theme"
            className="rounded-full border border-slate-600 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
