const tones = {
  accent: 'bg-accent-soft text-accent-ink',
  terracotta: 'bg-terracotta-soft text-terracotta-ink',
  terracottaStrong: 'bg-terracotta-soft-strong text-terracotta-ink',
  danger: 'bg-danger-soft text-danger-ink',
  info: 'bg-info-soft text-info-ink',
  neutral: 'bg-neutral-soft text-ink',
}

// A small status tag. The tone picks the color; the status lists in config/adminContent.js decide which tone a status gets.
function Badge({ tone = 'neutral', children }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium whitespace-nowrap ${tones[tone]}`}>{children}</span>
}

export default Badge
