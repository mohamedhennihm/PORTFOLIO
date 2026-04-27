import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  { href: 'https://github.com/mohamedhennihm', label: 'GitHub', icon: FiGithub },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: FiLinkedin },
  { href: 'mailto:you@example.com', label: 'Email', icon: FiMail },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 py-8">
      <div className="mx-auto flex w-[min(1100px,92%)] flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Mohamed Hennih. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                aria-label={link.label}
                className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
