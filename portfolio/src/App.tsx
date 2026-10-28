import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import CaseStudy from './components/CaseStudy'
import { Section, Ext, Chip, Todo } from './components/ui'
import ProjectList from './components/ProjectList'
import { projects, applied, coursework, additional, experience, skills, interests, GITHUB, EMAIL, LINKEDIN, CV_URL } from './data'

const nav = ['about', 'projects', 'applied', 'coursework', 'experience', 'education', 'community', 'skills', 'contact']

export default function App() {
  const [route, setRoute] = useState(location.hash)
  const [dark, setDark] = useState(document.documentElement.dataset.theme === 'dark')
  const [open, setOpen] = useState(false)
  useEffect(() => { const f = () => { setRoute(location.hash); if (location.hash.startsWith('#/')) window.scrollTo(0, 0) }; addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])
  const toggle = () => { const t = dark ? 'light' : 'dark'; document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t) } catch {} setDark(!dark) }
  const slug = route.startsWith('#/project/') ? route.slice(10) : ''
  const project = projects.find(p => p.slug === slug)
  useEffect(() => { document.title = project ? `${project.title} | Hamna Masood` : 'Hamna Masood | AI/ML Research and Development' }, [project])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-ink text-paper px-3 py-2 rounded">Skip to content</a>
      <nav aria-label="Main" className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-[color-mix(in_srgb,var(--paper)_85%,transparent)] border-b border-line">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <a href="#/" className="font-serif text-lg">Hamna Masood</a>
          <ul className="hidden md:flex gap-6 text-sm">{nav.map(n => <li key={n}><a className="capitalize hover:text-lav" href={`#/`} onClick={e => { e.preventDefault(); location.hash = '#/'; setTimeout(() => document.getElementById(n)?.scrollIntoView(), 30) }}>{n}</a></li>)}</ul>
          <div className="flex gap-2">
            <button onClick={toggle} aria-label="Toggle dark mode" className="p-2 rounded hover:bg-[var(--wash)]">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="md:hidden p-2">{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {open && <ul className="md:hidden px-6 pb-4 space-y-2">{nav.map(n => <li key={n}><a className="capitalize" href="#/" onClick={e => { e.preventDefault(); setOpen(false); location.hash = '#/'; setTimeout(() => document.getElementById(n)?.scrollIntoView(), 30) }}>{n}</a></li>)}</ul>}
      </nav>
      <main id="main">
        {slug ? (project ? <CaseStudy p={project} /> : <p className="pt-32 px-6">Project not found. <a className="underline" href="#/">Back home</a></p>) : (<>
          <Hero />
          <Section id="about" title="About">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 max-w-prose">
                <p>I studied Computer Science and spent much of my final years building and testing machine learning systems, mostly on questions of reliability: what changes when the input is an accent the model rarely saw, a language mix, or a degraded image.</p>
                <p>Alongside coursework I built practical applications, including a hospital information management system with an AI voice agent, and several hardware and systems projects.</p>
                <p>My research so far is independent and small in scale. I want to continue it at Master's level, with supervision, larger datasets and more rigorous methodology.</p>
              </div>
              <div><h3 className="font-serif text-xl mb-3">Research interests</h3><ul className="list-disc pl-5 space-y-1 text-mute">{interests.map(i => <li key={i}>{i}</li>)}</ul></div>
            </div>
          </Section>
          <Section id="projects" title="Research projects">
            <p className="text-mute mb-8 max-w-prose">Independent projects, not peer reviewed publications. Each case study states its limits.</p>
            <div className="grid md:grid-cols-2 gap-5">{projects.map(p => <ProjectCard key={p.slug} p={p} />)}</div>
          </Section>
          <Section id="applied" title="Applied AI and software engineering"><ProjectList items={applied} /></Section>
          <Section id="coursework" title="Selected coursework and engineering projects">
            <ProjectList items={coursework} compact />
            <p className="text-sm text-mute mt-6">Also: {additional.join(', ')}.</p>
          </Section>
          <Section id="experience" title="Experience">
            <ol className="space-y-6">{experience.map(e => <li key={e.role + e.org} className="border-l-2 border-lav pl-5"><h3 className="font-serif text-xl">{e.role}, {e.org}</h3><p className="text-sm text-mute mb-1">{e.when}</p><p><Todo text={e.note} /></p></li>)}</ol>
          </Section>
          <Section id="education" title="Education">
            <h3 className="font-serif text-xl">BS Computer Science</h3>
            <p className="text-mute">2022 to 2026</p>
            <p className="mt-3">Dean's List of Honours twice.</p>
          </Section>
          <Section id="community" title="Leadership and community">
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="font-serif text-xl mb-1">General Secretary, Google Developer Group university chapter</h3><p className="text-mute">Organized and coordinated technical events and workshops, represented the chapter at events, and prepared event and activity reports.</p></div>
              <div><h3 className="font-serif text-xl mb-1">Animal welfare volunteer, 2024 to present</h3><p className="text-mute">On my own, not through an organization, I look after stray animals: food, shelter, help with veterinary treatment and recovery, and adoptions. I also encourage humane treatment of community animals.</p></div>
            </div>
          </Section>
          <Section id="skills" title="Skills">
            <dl className="grid md:grid-cols-2 gap-6">{Object.entries(skills).map(([k, v]) => <div key={k}><dt className="font-serif text-lg mb-2">{k}</dt><dd className="flex flex-wrap gap-2">{v.map(s => <Chip key={s}>{s}</Chip>)}</dd></div>)}</dl>
          </Section>
          <Section id="contact" title="Contact">
            <ul className="space-y-2">
              <li>GitHub: <Ext href={GITHUB}>github.com/hamnacs</Ext></li>
              {EMAIL && <li>Email: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>}
              {LINKEDIN && <li>LinkedIn: <Ext href={LINKEDIN}>Profile</Ext></li>}
              {CV_URL && <li>CV: <a className="underline" href={CV_URL} download>Download PDF</a></li>}
            </ul>
          </Section>
        </>)}
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">Hamna Masood</footer>
    </>
  )
}
