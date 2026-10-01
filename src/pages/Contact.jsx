import { useState } from 'react'

// ===== EDIT YOUR CONTACT INFO HERE =====
const CONTACT_INFO = {
  address: "Bugnay, Tuao, Cagayan",
  mapsQuery: "Bugnay, Tuao, Cagayan",
  phone: "09XX XXX XXXX",
  email: "yourchurch@email.com",
  facebook: "", // paste your Facebook page link (leave empty to hide)
  services: [
    { day: "Sunday", time: "10:00 AM" },
    { day: "Saturday", time: "9:30 AM" },
  ],
}
// =======================================

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Message from ${form.name}`
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#26364a] outline-none focus:border-[#26364a] transition-colors'

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        {/* Header card */}
        <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 md:p-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
            GET IN TOUCH
          </span>
          <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-4xl md:text-5xl leading-[1.05] font-medium">
            Contact <span>Us</span>
          </h1>
          <p className="mt-6 max-w-[38rem] text-lg leading-8 text-slate-500">
            We'd love to hear from you. Send us a message, call us, or visit us
            on a Sunday.
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          {/* Info card */}
          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10 flex flex-col gap-8">
            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Address
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                {CONTACT_INFO.address}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Phone
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                {CONTACT_INFO.phone}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Email
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl break-all">
                {CONTACT_INFO.email}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Service Times
              </div>
              <div className="mt-2 space-y-1">
                {CONTACT_INFO.services.map((s) => (
                  <div
                    key={s.day}
                    className="flex justify-between font-['Cormorant_Garamond',serif] text-xl"
                  >
                    <span>{s.day}</span>
                    <span>{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  CONTACT_INFO.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors"
              >
                <span className="text-[10px]">◆</span> Get directions
              </a>
              {CONTACT_INFO.facebook && (
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-300 bg-white/60 text-sm font-medium px-5 py-3 hover:bg-white transition-colors"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>

          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10"
          >
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-medium">
              Send a message
            </h2>

            <label className="mt-6 block text-[11px] tracking-[0.15em] text-slate-500 uppercase">
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

            <label className="mt-5 block text-[11px] tracking-[0.15em] text-slate-500 uppercase">
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

            <label className="mt-5 block text-[11px] tracking-[0.15em] text-slate-500 uppercase">
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
              <span className="text-[10px]">◆</span> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact