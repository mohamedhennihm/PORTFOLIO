import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../../gumball-goofy-ahh-desktop-wallpaper-4k.jpg'

const titles = ['Backend Developer', 'Python Engineer', 'Open Source Contributor']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let charIndex = 0
    const current = titles[titleIndex]
    const typeInterval = setInterval(() => {
      charIndex += 1
      setTyped(current.slice(0, charIndex))
      if (charIndex >= current.length) {
        clearInterval(typeInterval)
        setTimeout(() => {
          setTyped('')
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }, 1500)
      }
    }, 80)
    return () => clearInterval(typeInterval)
  }, [titleIndex])

  return (
    <section className="relative flex min-h-screen items-center pt-20" id="hero">
      <div className="mx-auto grid w-[min(1100px,92%)] gap-10 md:grid-cols-[1.25fr_1fr] md:items-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm tracking-[0.2em] text-cyan-400">HELLO, I AM</p>
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">Henni Mohamed Essedik</h1>
          <h2 className="mt-4 h-8 text-xl text-cyan-300 md:text-2xl">
            {typed}
            <span className="ml-1 inline-block w-1 animate-pulse bg-cyan-300 align-middle">&nbsp;</span>
          </h2>
          <p className="mt-6 max-w-xl text-slate-300">
            I build robust backend systems and delightful web experiences with a strong focus on
            performance, reliability, and developer experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="btn-primary" href="#projects">
              View My Work
            </a>
            <a className="btn-secondary" href="/cv-placeholder.pdf">
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
        >
          <img
            alt="Profile portrait placeholder"
            className="h-72 w-72 rounded-full border-4 border-cyan-400/50 object-cover shadow-xl shadow-cyan-500/20 md:h-80 md:w-80"
            src={profileImage}
          />
        </motion.div>
      </div>
    </section>
  )
}
