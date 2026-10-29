interface Props {
  className?: string
}

export function ProfissionalSaude({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Ilustração de nutricionista"
    >
      {/* Fundo circular suave */}
      <circle cx="200" cy="200" r="190" fill="#f0fff4" />
      <circle cx="200" cy="200" r="150" fill="#ffffff" stroke="#c6f6d5" strokeWidth="4" />

      {/* Jaleco */}
      <path
        d="M 140 340 Q 140 240 200 220 Q 260 240 260 340 Z"
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth="3"
      />
      {/* Gola do jaleco */}
      <path d="M 175 225 L 200 250 L 225 225 L 215 218 L 200 232 L 185 218 Z" fill="#c6f6d5" />
      {/* Bolso */}
      <rect x="215" y="285" width="30" height="22" rx="3" fill="#f0fff4" stroke="#c6f6d5" strokeWidth="1.5" />
      {/* Cabelo */}
      <path
        d="M 155 165 Q 150 105 200 100 Q 250 105 245 165 Q 240 145 225 140 Q 210 155 200 155 Q 190 155 175 140 Q 160 145 155 165 Z"
        fill="#4a3a2a"
      />
      {/* Rosto */}
      <ellipse cx="200" cy="175" rx="42" ry="48" fill="#fbd38d" />
      {/* Orelhas */}
      <ellipse cx="158" cy="180" rx="7" ry="12" fill="#fbd38d" />
      <ellipse cx="242" cy="180" rx="7" ry="12" fill="#fbd38d" />
      {/* Olhos */}
      <circle cx="185" cy="172" r="5" fill="#2d3748" />
      <circle cx="215" cy="172" r="5" fill="#2d3748" />
      <circle cx="187" cy="170" r="1.5" fill="#ffffff" />
      <circle cx="217" cy="170" r="1.5" fill="#ffffff" />
      {/* Sorriso */}
      <path
        d="M 188 192 Q 200 202 212 192"
        fill="none"
        stroke="#2d3748"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Blush */}
      <ellipse cx="172" cy="188" rx="6" ry="3" fill="#feb2b2" opacity="0.6" />
      <ellipse cx="228" cy="188" rx="6" ry="3" fill="#feb2b2" opacity="0.6" />

      {/* Estetoscópio */}
      <path
        d="M 175 235 Q 165 260 180 285 L 195 295"
        fill="none"
        stroke="#2f855a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="195" cy="295" r="8" fill="#2f855a" />
      <circle cx="195" cy="295" r="4" fill="#c6f6d5" />

      {/* Folhinha decorativa */}
      <g transform="translate(320 100) rotate(25)">
        <ellipse cx="0" cy="-15" rx="10" ry="20" fill="#48bb78" />
        <ellipse cx="10" cy="-5" rx="8" ry="16" fill="#38a169" transform="rotate(30 10 -5)" />
        <line x1="0" y1="-35" x2="0" y2="10" stroke="#2f855a" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}