import { useState } from 'react'
import { Github, Mail, Download, FolderOpen } from 'lucide-react'
import { GITHUB, EMAIL, CV_URL } from '../data'

const SAMPLE = 'The model heard the sentence differently.'
// Deterministic "degradation": replaces a share of letters, to echo the theme of the research.
function degrade(s: string, level: number) {
  return s.split('').map((c, i) => (c !== ' ' && ((i * 7919) % 100) < level * 0.6 ? '\u00b7' : c)).join('')
}
export default function Hero() {
  const [lvl, setLvl] = useState(0)
  const btn = 'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors'
  return (
    <header className="mx-auto max-w-5xl px-6 pt-28 pb-16 rise">
      <p className="text-mute mb-4">Computer Science Graduate, AI/ML Research and Development</p>
      <h1 className="font-serif text-5xl md:text-7xl mb-6">Hamna Masood</h1>
      <p className="max-w-2xl text-lg text-mute mb-8">
        I explore how machine learning systems behave when real world data differs from ideal conditions, from accented and code switched speech to visual degradation and multilingual text. My work combines practical AI development with experimental evaluation, failure analysis, and an interest in making intelligent systems more reliable.
      </p>
      <div className="flex flex-wrap gap-3 mb-14">
        <a href="#projects" className={`${btn} bg-ink text-paper`}><FolderOpen size={16} aria-hidden />View projects</a>
        {CV_URL && <a href={CV_URL} download className={`${btn} border border-line`}><Download size={16} aria-hidden />Download CV</a>}
        <a href={GITHUB} target="_blank" rel="noreferrer" className={`${btn} border border-line`}><Github size={16} aria-hidden />GitHub</a>
        {EMAIL && <a href={`mailto:${EMAIL}`} className={`${btn} border border-line`}><Mail size={16} aria-hidden />Email</a>}
      </div>
      <div className="card rounded-lg p-5 max-w-xl">
        <label htmlFor="deg" className="block text-sm text-mute mb-2">Degrade the input and watch the transcript suffer</label>
        <input id="deg" type="range" min={0} max={100} value={lvl} onChange={e => setLvl(+e.target.value)} className="w-full accent-[var(--lav)]" />
        <p className="font-serif text-2xl mt-3" aria-live="polite" style={{ filter: `blur(${lvl / 60}px)`, letterSpacing: `${lvl / 400}em` }}>{degrade(SAMPLE, lvl)}</p>
        <p className="text-xs text-mute mt-2">A toy illustration of the theme, not a measured result.</p>
      </div>
    </header>
  )
}
