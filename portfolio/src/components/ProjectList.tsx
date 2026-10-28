import { ChevronDown } from 'lucide-react'
import { Item } from '../data'
import { Chip, Ext } from './ui'

export default function ProjectList({ items, compact = false }: { items: Item[]; compact?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map(it => (
        <details key={it.title} className={`card group rounded-lg ${compact ? 'p-4' : 'p-5'}`}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <span><span className="font-serif text-xl block">{it.title}</span><span className="text-mute text-sm">{it.summary}</span></span>
            <ChevronDown size={18} aria-hidden className="mt-1 shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-4 space-y-3 text-mute">
            {it.details.map(d => <p key={d}>{d}</p>)}
            <div className="flex flex-wrap gap-2">{it.tech.map(t => <Chip key={t}>{t}</Chip>)}</div>
            {it.repo && <Ext href={it.repo}>Repository</Ext>}
            {it.download && <p><a className="underline" href={it.download.href} download>{it.download.label}</a></p>}
            {it.images && it.images.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">{it.images.map(im => <img key={im.src} src={im.src} alt={im.alt} loading="lazy" className="rounded border border-line w-full" />)}</div>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}
