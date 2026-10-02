import { useState } from 'react'

const JOIN_EMAIL = "yourchurch@email.com"

function JoinUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Join us message from ${form.name}`
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#26364a] outline-none focus:border-[#26364a] transition-colors'

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 md:p-16 text-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
            BECOME PART OF US
          </span>
          <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-4xl md:text-5xl leading-[1.05] font-medium">
            Join <span>Us</span>
          </h1>
          <p className="mt-6 max-w-[38rem] mx-auto text-md leading-8 text-slate-500">
            Tell us a bit about yourself and we'll reach out to welcome you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-5 rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10 max-w-xl mx-auto text-center"
        >
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-medium">
            Send a message
          </h2>

          <label className="mt-6 block text-[11px] tracking-[0.15em] text-slate-500 uppercase text-left">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </label>

          <label className="mt-5 block text-[11px] tracking-[0.15em] text-slate-500 uppercase text-left">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </label>

          <label className="mt-5 block text-[11px] tracking-[0.15em] text-slate-500 uppercase text-left">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors cursor-pointer"
          >
            <span className="text-[5px]">◆</span> Join us
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinUs