const stats = [
  ["20+", "years experience"],
  ["1,500+", "completed projects"],
  ["3,500+", "healthy volunteers database"],
  ["190+", "validated bioanalytical methods"],
];

export default function Stats() {
  return (
    <section className="-mt-16 relative z-20 px-4">
      <div className="pml-container grid gap-4 rounded-[30px] bg-white p-4 shadow-[0_24px_90px_rgba(0,0,0,0.14)] md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="rounded-[24px] border border-black/5 bg-[#f6faf7] p-7 text-center"
          >
            <div className="text-5xl font-black tracking-[-0.05em] text-[#039147]">
              {value}
            </div>
            <div className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-black/45">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
