import { useState } from 'react'
import { supabase } from '../lib/supabase'

const INVOLVEMENT_OPTIONS = [
  'Sunday Worship',
  'Bible Study',
  'Youth Ministry',
  'Music / Worship Team',
  'Volunteer',
  'Small Group',
  'Other',
]

function JoinUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact_number: '',
    age: '',
    ministry: '',
    message: '',
  })
  const [involvement, setInvolvement] = useState([])
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const toggleInvolvement = (option) => {
    setInvolvement((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase.from('join_us_submissions').insert([
      {
        name: form.name,
        email: form.email,
        contact_number: form.contact_number,
        age: form.age ? parseInt(form.age) : null,
        ministry: form.ministry,
        involvement: involvement.join(', '),
        message: form.message,
      },
    ])

    if (error) {
      console.error(error)
      setStatus('error')
      return
    }

    setStatus('success')
    setForm({ name: '', email: '', contact_number: '', age: '', ministry: '', message: '' })
    setInvolvement([])
  }

  const inputClass =
    'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#26364a] outline-none focus:border-[#26364a] transition-colors'

  const labelClass = 'text-[11px] tracking-[0.15em] text-slate-500 uppercase'

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
          className="mt-5 rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10 max-w-2xl mx-auto"
        >
          <label className={labelClass}>
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=""
              required
              className={inputClass}
            />
          </label>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <label className={labelClass}>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=""
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Phone
              <input
                type="tel"
                name="contact_number"
                value={form.contact_number}
                onChange={handleChange}
                placeholder="(+63) ***** ****"
                required
                className={inputClass}
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <label className={labelClass}>
              Age
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder=""
                min="1"
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Preferred service
              <select
                name="ministry"
                value={form.ministry}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select a service
                </option>
                
                <option value="Sunday (10:00 AM)">Sunday (10:00 AM)</option>
                
              </select>
            </label>
          </div>

          <p className={`${labelClass} mt-7 mb-3`}>
            How would you like to get involved?
          </p>
          <div className="flex flex-wrap gap-2">
            {INVOLVEMENT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleInvolvement(opt)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  involvement.includes(opt)
                    ? 'bg-[#26364a]/5 border-[#26364a] text-[#26364a]'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <label className={`${labelClass} block mt-7`}>
            Anything else we should know?{' '}
            <span className="text-slate-400 normal-case">(optional)</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Come us and Worship God!"
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-8 flex w-fit mx-auto items-center justify-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-6 py-3 hover:bg-[#1c2a3a] transition-colors cursor-pointer disabled:opacity-50"
          >
            <span className="text-[10px] w-fit mx-auto justify-center">◆</span>
            {status === 'loading' ? 'Sending...' : 'Send my details'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-sm text-green-600">
              Thank you! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default JoinUs
