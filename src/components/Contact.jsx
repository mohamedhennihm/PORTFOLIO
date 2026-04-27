import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const FORM_ENDPOINT = 'https://formspree.io/f/placeholder'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSending(true)
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error()
      setForm({ name: '', email: '', message: '' })
      toast.success('Message sent successfully!')
    } catch {
      toast.error('Could not send message. Update Formspree endpoint and try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="mx-auto w-[min(780px,92%)]">
        <h2 className="section-title">Contact</h2>
        <motion.form
          className="mt-8 space-y-4 rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
          initial={{ opacity: 0, y: 20 }}
          onSubmit={handleSubmit}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <input
            className="input"
            onChange={(event) => setForm((f) => ({ ...f, name: event.target.value }))}
            placeholder="Your name"
            required
            value={form.name}
          />
          <input
            className="input"
            onChange={(event) => setForm((f) => ({ ...f, email: event.target.value }))}
            placeholder="Your email"
            required
            type="email"
            value={form.email}
          />
          <textarea
            className="input min-h-36"
            onChange={(event) => setForm((f) => ({ ...f, message: event.target.value }))}
            placeholder="Your message"
            required
            value={form.message}
          />
          <button className="btn-primary w-full justify-center" disabled={isSending} type="submit">
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
