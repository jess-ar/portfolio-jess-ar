const ProgressBar = ({ value, level, label = "Progress" }) => {
  const raw = value ?? level ?? 0
  const pct = Math.max(0, Math.min(100, Math.round(raw)))

  return (
    <div className="relative z-10">
      <div className="flex items-center justify-between text-xs text-stats-grey mb-1">
        <span>{label}</span>
        <span aria-label={`${pct} percent complete`}>{pct}%</span>
      </div>

      <div
        className="w-full bg-secondary/40 rounded-full h-2 border border-terciary/20"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${pct}% complete`}
      >
        <div
          className="bg-gradient-to-r from-terciary to-accent h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, boxShadow: "0 0 8px rgba(14, 135, 205, 0.4)" }}
        />
      </div>
    </div>
  )
}

export default ProgressBar;
