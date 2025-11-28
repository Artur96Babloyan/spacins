export default function AppleIcon() {
  return (
    <svg width="180" height="180" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="spacinsGlowApple" cx="50%" cy="50%" r="60%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#6366f1" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </radialGradient>
        <linearGradient id="spacinsCoreApple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="32" fill="#020617" />
      <circle cx="64" cy="64" r="46" fill="url(#spacinsGlowApple)" />
      <path
        d="M44 82c8.4 6.6 20.8 7.3 30.5 1.7 5.6-3.2 7.7-8.7 4.5-12.8-2.5-3.1-7.4-4.3-12.2-3.7-6.4.9-14 .1-18.8-3.9-6.4-5.3-5.1-14.5 3.4-20.4 8.4-5.9 21.1-6.1 28.9-.5"
        fill="none"
        stroke="url(#spacinsCoreApple)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="90" cy="42" r="10" fill="#f8fafc" />
    </svg>
  );
}

