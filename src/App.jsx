import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

  useEffect(() => {
    if (isTouchDevice) return undefined
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <motion.div
      animate={{ x: position.x - 8, y: position.y - 8 }}
      className="pointer-events-none fixed z-[70] hidden h-4 w-4 rounded-full bg-cyan-300/80 mix-blend-difference md:block"
      transition={{ type: 'tween', ease: 'linear', duration: 0.08 }}
    />
  )
}

function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <AnimatedCursor />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  )
}
