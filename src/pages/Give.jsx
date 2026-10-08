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
}

function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200/80 p-8">
      <div className="text-3xl">{icon}</div>
      <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-2xl text-[#26364a]">
        {title}
      </h2>
      <div className="mt-3 text-slate-500 text-sm leading-7">{children}</div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-slate-100 last:border-0">
      <span className="text-[11px] tracking-[0.15em] uppercase text-slate-400">{label}</span>
      <span className="text-[#26364a] font-medium text-right">{value}</span>
    </div>
  )
}

function Give() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
        Give
      </span>
      <h1 className="mt-3 font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-medium text-[#26364a]">
        Ways to Give
      </h1>
      <p className="mt-4 max-w-xl text-slate-500 leading-7">
        Thank you for supporting the work of Coram Deo. Choose the way that is most convenient for you.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card icon="💳" title="Online Giving">
          <p>Give using {GIVE_INFO.online.methods.join(", ")}.</p>
          {GIVE_INFO.online.link && (
            <a
              href={GIVE_INFO.online.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors"
            >
              <span className="text-[10px]">◆</span> Give online
            </a>
          )}
        </Card>

        <Card icon="🏦" title="Bank Transfer">
          <Row label="Bank" value={GIVE_INFO.bank.bankName} />
          <Row label="Account name" value={GIVE_INFO.bank.accountName} />
          <Row label="Account no." value={GIVE_INFO.bank.accountNumber} />
        </Card>

        <Card icon="📱" title="GCash / QR Code">
          <img
            src={GIVE_INFO.gcash.qrImage}
            alt="GCash QR code"
            className="w-44 h-44 object-contain rounded-2xl border border-slate-200 bg-white mx-auto"
          />
          <div className="mt-4">
            <Row label="Name" value={GIVE_INFO.gcash.name} />
            <Row label="Number" value={GIVE_INFO.gcash.number} />
          </div>
        </Card>

        <Card icon="🏠" title="In-Person Giving">
          <p>{GIVE_INFO.inPerson.text}</p>
          <div className="mt-3">
            <Row label="Services" value={GIVE_INFO.inPerson.times} />
            <Row label="Address" value={GIVE_INFO.inPerson.address} />
          </div>
        </Card>

        <Card icon="📅" title="Recurring Giving">
          <p>{GIVE_INFO.recurring.text}</p>
        </Card>
      </div>
    </section>
  )
}

export default Give