import { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function Todo({ text }: { text: string }) {
  return text.startsWith('[TO CONFIRM]') ? <span className="todo text-sm">{text}</span> : <>{text}</>
}
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 scroll-mt-16">
      <h2 className="font-serif text-3xl md:text-4xl mb-8">{title}</h2>
      {children}
    </section>
  )
}
export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline decoration-lav underline-offset-4 hover:text-lav">{children}<ArrowUpRight size={14} aria-hidden /></a>
}
export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-line px-3 py-0.5 text-sm text-mute">{children}</span>
}
