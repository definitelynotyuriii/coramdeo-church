import { useState } from "react"

/* ------------------------------------------------------------------ */
/*  EDIT THIS PART ONLY                                                */
/* ------------------------------------------------------------------ */
const GIVE_INFO = {
  online: {
    methods: ["GCash", "Maya", "Bank transfer", "Credit / debit card"],
    link: "", // paste your online giving link here (leave empty to hide the button)
  },
  bank: {
    bankName: "Your Bank Name",
    accountName: "Coram Deo Christian Church",
    accountNumber: "0000-0000-0000",
  },
  gcash: {
    name: "Coram Deo Christian Church",
    number: "09XX XXX XXXX",
    qrImage: "/images/gcash-qr.png", // put your QR image in public/images/
  },
  inPerson: {
    text: "You may give your offering during our Sunday worship service.",
    times: "Sunday, 10:00 AM · Saturday, 9:30 AM",
    address: "Bugnay, Tuao, Cagayan",
  },
  recurring: {
    text: "You can set up a regular monthly or weekly gift through your bank or GCash. Contact us if you'd like help setting it up.",
  },
  contact: {
    label: "Questions about giving?",
    email: "", // e.g. "give@yourchurch.org" (leave empty to hide)
    phone: "", // e.g. "0917 000 0000" (leave empty to hide)
  },
  note: "When you give, add a short note (tithe, offering, or missions) so our treasurer can record it correctly.",
}

// Set to true while you're still editing, to preview cards that have placeholder data.
const SHOW_PLACEHOLDERS = false
/* ------------------------------------------------------------------ */

const isPlaceholder = (v) =>
  !v || /X{2,}/i.test(v) || /^[0\-\s]+$/.test(v) || /^your /i.test(v)

const isReady = (...values) =>
  SHOW_PLACEHOLDERS || values.every((v) => !isPlaceholder(v))

/* Animations: one page-load reveal + small feedback motions.
   Everything is switched off for people who prefer reduced motion. */
const STYLES = `
@keyframes give-rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes give-pop {
  0%   { transform: scale(0.85); }
  60%  { transform: scale(1.12); }
  100% { transform: scale(1); }
}
.give-rise {
  opacity: 0;
  animation: give-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.give-pop { animation: give-pop 0.35s ease-out; }
@media (prefers-reduced-motion: reduce) {
  .give-rise { opacity: 1; animation: none; }
  .give-pop  { animation: none; }
  .give-card, .give-card * { transition: none !important; }
}
`

/* Staggered delay helper: header first, then each card in order */
const delay = (i) => ({ animationDelay: `${i * 90}ms` })

function Card({ icon, title, children, className = "", index = 0 }) {
  return (
    <div
      style={delay(index)}
      className={`group give-rise give-card bg-white rounded-[32px] shadow-sm border border-slate-200/80 p-8
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg hover:border-[#c49a4a]/40 ${className}`}
    >
      <div
        aria-hidden="true"
        className="text-3xl inline-block transition-transform duration-300 group-hover:scale-110"
      >
        {icon}
      </div>
      <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-2xl text-[#26364a]">
        {title}
      </h2>
      <div className="mt-3 text-slate-500 text-sm leading-7">{children}</div>
    </div>
  )
}

function Rows({ children }) {
  return <dl>{children}</dl>
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-slate-100 last:border-0">
      <dt className="text-[11px] tracking-[0.15em] uppercase text-slate-500">{label}</dt>
      <dd className="text-[#26364a] font-medium text-right">{value}</dd>
    </div>
  )
}

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard blocked, user can still select the text manually */
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 py-2 border-b border-slate-100 last:border-0">
      <dt className="text-[11px] tracking-[0.15em] uppercase text-slate-500">{label}</dt>
      <dd className="flex items-center gap-3 text-right">
        <span className="text-[#26364a] font-medium tabular-nums">{value}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label}`}
          className={`min-w-[68px] rounded-full border px-3 py-1 text-xs font-semibold
            transition-all duration-200 active:scale-95
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c49a4a] focus-visible:ring-offset-2
            ${
              copied
                ? "give-pop border-emerald-600 bg-emerald-50 text-emerald-700"
                : "border-[#9a7228]/40 text-[#9a7228] hover:bg-[#9a7228] hover:text-white"
            }`}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </dd>
    </div>
  )
}

function Give() {
  const [qrOk, setQrOk] = useState(true)
  const { online, bank, gcash, inPerson, recurring, contact, note } = GIVE_INFO

  const showBank = isReady(bank.bankName, bank.accountNumber)
  const showGcash = isReady(gcash.number)

  // Running index so the stagger stays correct when cards are hidden
  let i = 2

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <style>{STYLES}</style>

      <div className="give-rise" style={delay(0)}>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#9a7228] uppercase">
          Give
        </span>
        <h1 className="mt-3 font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-medium text-[#26364a]">
          Ways to Give
        </h1>
        <p className="mt-4 max-w-xl text-slate-500 leading-7">
          Thank you for supporting the work of Coram Deo. Choose the way that is most
          convenient for you.
        </p>
        <p className="mt-3 max-w-xl text-sm italic text-slate-500 leading-7">
          “Each of you should give what you have decided in your heart to give, not
          reluctantly or under compulsion, for God loves a cheerful giver.” — 2 Corinthians 9:7
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card icon="💳" title="Online Giving" index={1}>
          <p>Give using {online.methods.join(", ")}.</p>
          {online.link && (
            <a
              href={online.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3
                transition-all duration-300 hover:bg-[#1c2a3a] hover:shadow-md active:scale-95
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c49a4a] focus-visible:ring-offset-2"
            >
              <span className="text-[10px] transition-transform duration-500 group-hover:rotate-180">
                ◆
              </span>
              Give online
            </a>
          )}
        </Card>

        {showBank && (
          <Card icon="🏦" title="Bank Transfer" index={i++}>
            <Rows>
              <Row label="Bank" value={bank.bankName} />
              <Row label="Account name" value={bank.accountName} />
              <CopyRow label="Account no." value={bank.accountNumber} />
            </Rows>
          </Card>
        )}

        {showGcash && (
          <Card icon="📱" title="GCash / QR Code" index={i++}>
            {qrOk ? (
              <>
                <img
                  src={gcash.qrImage}
                  alt="GCash QR code for Coram Deo Christian Church"
                  loading="lazy"
                  onError={() => setQrOk(false)}
                  className="w-44 h-44 object-contain rounded-2xl border border-slate-200 bg-white mx-auto
                    transition-transform duration-300 hover:scale-105"
                />
                <a
                  href={gcash.qrImage}
                  download="coram-deo-gcash-qr.png"
                  className="mt-3 block text-center text-xs font-semibold text-[#9a7228] underline-offset-4
                    hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c49a4a] rounded"
                >
                  Save QR to your phone
                </a>
              </>
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-500">
                QR code is not available right now. Please use the GCash number below.
              </p>
            )}
            <div className="mt-4">
              <Rows>
                <Row label="Name" value={gcash.name} />
                <CopyRow label="Number" value={gcash.number} />
              </Rows>
            </div>
          </Card>
        )}

        <Card icon="🏠" title="In-Person Giving" index={i++}>
          <p>{inPerson.text}</p>
          <div className="mt-3">
            <Rows>
              <Row label="Services" value={inPerson.times} />
              <Row label="Address" value={inPerson.address} />
            </Rows>
          </div>
        </Card>

        <Card
          icon="📅"
          title="Recurring Giving"
          index={i++}
          className="md:col-span-2 lg:col-span-3"
        >
          <p className="max-w-2xl">{recurring.text}</p>
        </Card>
      </div>

      <div
        className="give-rise mt-10 rounded-3xl bg-[#26364a]/[0.04] border border-slate-200/80 p-6 text-sm leading-7 text-slate-600"
        style={delay(i + 1)}
      >
        <p>{note}</p>
        {(contact.email || contact.phone) && (
          <p className="mt-2">
            <span className="font-medium text-[#26364a]">{contact.label}</span>{" "}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="text-[#9a7228] underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
            )}
            {contact.email && contact.phone && " · "}
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-[#9a7228] underline-offset-4 hover:underline"
              >
                {contact.phone}
              </a>
            )}
          </p>
        )}
      </div>
    </section>
  )
}

export default Give