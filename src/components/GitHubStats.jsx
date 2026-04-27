import { motion } from 'framer-motion'

const username = 'mohamedhennihm'

export default function GitHubStats() {
  return (
    <section className="section" id="stats">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="section-title">GitHub Stats</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <motion.img
            alt="GitHub total stats"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-2"
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true`}
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
          />
          <motion.img
            alt="GitHub top languages"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-2"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true`}
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
          />
          <motion.img
            alt="GitHub contribution streak"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-2 md:col-span-2"
            src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=transparent&hide_border=true`}
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
          />
        </div>
      </div>
    </section>
  )
}
