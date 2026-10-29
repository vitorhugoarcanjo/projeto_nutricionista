interface Props {
  className?: string
}

export function PratoSaudavel({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Ilustração de um prato saudável"
    >
      {/* Fundo circular suave */}
      <circle cx="200" cy="200" r="190" fill="#f0fff4" />
      <circle cx="200" cy="200" r="150" fill="#ffffff" stroke="#c6f6d5" strokeWidth="4" />

      {/* Prato */}
      <circle cx="200" cy="200" r="130" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="200" cy="200" r="110" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

      {/* Metade esquerda: vegetais (verde) */}
      <path
        d="M 200 200 L 200 90 A 110 110 0 0 0 90 200 Z"
        fill="#c6f6d5"
      />
      {/* Folhas estilizadas */}
      <ellipse cx="140" cy="150" rx="22" ry="35" fill="#48bb78" transform="rotate(-25 140 150)" />
      <ellipse cx="160" cy="175" rx="18" ry="28" fill="#38a169" transform="rotate(15 160 175)" />
      <ellipse cx="130" cy="185" rx="16" ry="26" fill="#2f855a" transform="rotate(-10 130 185)" />

      {/* Metade direita superior: proteína (salmão) */}
      <path
        d="M 200 200 L 310 200 A 110 110 0 0 0 200 90 Z"
        fill="#fed7d7"
      />
      <ellipse cx="255" cy="150" rx="45" ry="28" fill="#fc8181" transform="rotate(-15 255 150)" />
      <ellipse cx="255" cy="150" rx="35" ry="18" fill="#feb2b2" transform="rotate(-15 255 150)" />

      {/* Metade direita inferior: carboidrato (arroz) */}
      <path
        d="M 200 200 L 310 200 A 110 110 0 0 1 200 310 Z"
        fill="#fefcbf"
      />
      <circle cx="245" cy="240" r="8" fill="#f6e05e" />
      <circle cx="265" cy="255" r="7" fill="#ecc94b" />
      <circle cx="235" cy="265" r="6" fill="#f6e05e" />
      <circle cx="255" cy="275" r="7" fill="#ecc94b" />
      <circle cx="275" cy="245" r="6" fill="#f6e05e" />

      {/* Metade esquerda inferior: mais vegetais */}
      <path
        d="M 200 200 L 90 200 A 110 110 0 0 0 200 310 Z"
        fill="#9ae6b4"
      />
      <circle cx="145" cy="245" r="14" fill="#48bb78" />
      <circle cx="165" cy="265" r="12" fill="#38a169" />
      <circle cx="135" cy="270" r="10" fill="#2f855a" />

      {/* Garfo e faca */}
      <g transform="translate(40 200)">
        <rect x="-3" y="-80" width="6" height="160" rx="3" fill="#718096" />
        <rect x="-10" y="-80" width="4" height="30" rx="2" fill="#718096" />
        <rect x="-2" y="-80" width="4" height="30" rx="2" fill="#718096" />
        <rect x="6" y="-80" width="4" height="30" rx="2" fill="#718096" />
      </g>
      <g transform="translate(360 200)">
        <path d="M -3 -80 L 8 -80 L 8 -30 L 3 -30 L 3 80 L -3 80 Z" fill="#718096" />
      </g>
    </svg>
  )
}