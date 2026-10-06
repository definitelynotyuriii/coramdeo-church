function YouthMinistry() {
  return (
    <section
      style={{
        animation: 'youthMinistryReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <style>{`
        @keyframes youthMinistryReveal {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Youth Ministry
      </h1>

      <img
        src="/images/youthministry.jpg"
        alt="Youth Ministry"
        className="w-full max-h-[480px] object-cover rounded-[32px] shadow-sm mb-6"
      />

    </section>
  )
}

export default YouthMinistry