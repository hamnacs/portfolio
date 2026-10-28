import { Project } from '../data'
import { Chip } from './ui'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <a href={`#/project/${p.slug}`} className="card group rounded-lg p-6 block transition-all hover:-translate-y-1 hover:border-lav motion-reduce:transform-none">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="font-serif text-2xl group-hover:text-lav">{p.title}</h3>
        <span className="text-sm text-mute">{p.year}</span>
      </div>
      <p className="text-mute mb-4">{p.tagline}</p>
      <div className="flex flex-wrap gap-2">{p.tech.map(t => <Chip key={t}>{t}</Chip>)}</div>
    </a>
  )
}
