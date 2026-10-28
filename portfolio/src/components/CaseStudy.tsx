import { ArrowLeft, Github } from 'lucide-react'
import { Project } from '../data'
import { Chip } from './ui'

export default function CaseStudy({ p }: { p: Project }) {
  const rows: [string, string][] = [
    ['Problem and motivation', p.problem], ['My contribution', p.contribution],
    ['Data and methodology', p.method], ['Models and technologies', p.models],
  ]
  return (
    <article className="mx-auto max-w-3xl px-6 pt-24 pb-24 rise">
      <a href="#/" className="inline-flex items-center gap-1 text-mute hover:text-lav mb-8"><ArrowLeft size={16} aria-hidden />All projects</a>
      <h1 className="font-serif text-4xl md:text-5xl mb-2">{p.title}</h1>
      <p className="text-mute mb-4">{p.tagline} ({p.year})</p>
      <div className="flex flex-wrap gap-2 mb-6">{p.tech.map(t => <Chip key={t}>{t}</Chip>)}</div>
      <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm mb-10"><Github size={16} aria-hidden />Repository</a>
      {rows.map(([h, t]) => <div key={h} className="mb-8"><h2 className="font-serif text-2xl mb-2">{h}</h2><p>{t}</p></div>)}
      <div className="mb-8"><h2 className="font-serif text-2xl mb-2">Key results</h2>
        <ul className="list-disc pl-5 space-y-1">{p.results.map(r => <li key={r}>{r}</li>)}</ul></div>
      <div className="mb-8"><h2 className="font-serif text-2xl mb-2">Limitations and lessons</h2><p>{p.limits}</p></div>
      <div><h2 className="font-serif text-2xl mb-2">Figures</h2><p>{p.figures}</p></div>
    </article>
  )
}
