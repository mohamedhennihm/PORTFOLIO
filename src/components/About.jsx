import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 95 },
  { name: 'FastAPI', level: 90 },
  { name: 'Git', level: 88 },
  { name: 'Docker', level: 84 },
  { name: 'React', level: 80 },
]

const timeline = [
  { year: '2025', title: 'Backend Engineer', detail: 'Built scalable APIs and automation pipelines.' },
  { year: '2023', title: 'Open Source Contributor', detail: 'Contributed to developer tooling and docs.' },
  { year: '2022', title: 'Computer Science Studies', detail: 'Focused on distributed systems and web engineering.' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="section-title">About Me</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          I am a developer passionate about backend architecture, APIs, and open-source
          collaboration. I enjoy turning complex product ideas into reliable, maintainable software.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-700">
                  <motion.div
                    className="h-full rounded-full bg-cyan-400"
                    initial={{ width: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.7 }}
                    viewport={{ once: true }}
                    whileInView={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                className="rounded-xl border border-slate-700 bg-slate-900/70 p-4"
                initial={{ opacity: 0, x: 30 }}
                key={item.year + item.title}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <p className="text-sm text-cyan-300">{item.year}</p>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
