export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: 'var(--ink)', paper: 'var(--paper)', card: 'var(--card)', line: 'var(--line)', mute: 'var(--mute)', lav: 'var(--lav)', teal: 'var(--teal)' },
    fontFamily: { serif: ['"Source Serif 4"', 'Georgia', 'serif'], sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'] }
  } },
}
