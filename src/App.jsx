import React from 'react'

const logoUrl = 'https://github.com/reylyngeneralmdse/site/raw/refs/heads/main/logo.png'

const branches = [
  {
    name: 'Bagumbong Branch',
    location: 'Bagumbong, Caloocan City',
    phone: '0922 831 5440',
    facebook: 'https://facebook.com/reylyngeneralmdsebagumbong',
    maps: 'https://maps.app.goo.gl/wRGExJZQXqptjnfWA',
    accent: 'bg-teal-600',
  },
  {
    name: 'Sta. Rosa I Branch',
    location: 'Sta. Rosa I, Marilao, Bulacan',
    phone: '0919 233 1955',
    facebook: 'https://facebook.com/reylyngeneralmdsestarosa',
    maps: 'https://maps.app.goo.gl/4JjNPM7K1A8Gd6eT6',
    accent: 'bg-amber-500',
  },
]

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function BranchCard({ branch, index }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
      <div className={`absolute inset-x-0 top-0 h-1.5 ${branch.accent}`} />
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Branch 0{index + 1}</p>
      <h3 className="mt-3 font-serif text-3xl font-bold text-slate-900">{branch.name}</h3>

      <div className="mt-7 space-y-4 border-y border-stone-100 py-6 text-slate-600">
        <div className="flex items-start gap-3"><span className="mt-0.5 text-teal-700"><PinIcon /></span><p>{branch.location}</p></div>
        <div className="flex items-center gap-3"><span className="text-teal-700"><PhoneIcon /></span><a className="font-semibold text-slate-700 hover:text-teal-700" href={`tel:${branch.phone.replaceAll(' ', '')}`}>{branch.phone}</a></div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href={branch.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">Visit Facebook <ArrowIcon /></a>
        <a href={branch.maps} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-50 px-4 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Get Directions <ArrowIcon /></a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="relative isolate bg-teal-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_20%_0%,#5eead4_0,transparent_30%),radial-gradient(circle_at_90%_80%,#fbbf24_0,transparent_25%)]" />
        <nav className="mx-auto flex max-w-6xl justify-end px-6 py-6 lg:px-8">
          <a href="#branches" className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">Our branches</a>
        </nav>
        <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center sm:pb-28 sm:pt-20 lg:px-8">
          <p className="mx-auto w-fit rounded-full border border-teal-300/30 bg-teal-800/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-100">Your neighborhood store</p>
          <img src={logoUrl} alt="Reylyn General Merchandise logo" className="mx-auto mt-7 h-auto w-28 object-contain drop-shadow-2xl sm:w-36 lg:w-44" />
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Reylyn General<br className="hidden sm:block" /> Merchandise</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-50/85 sm:text-xl">Quality general merchandise for your everyday needs, served with care from our local branches.</p>
          <a href="#branches" className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-teal-950">Find a branch <ArrowIcon /></a>
        </section>
      </header>

      <main id="branches" className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Come visit us</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Two branches, one helpful team.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Choose your nearest Reylyn branch for updates, directions, or a quick call.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {branches.map((branch, index) => <BranchCard key={branch.name} branch={branch} index={index} />)}
        </div>
      </main>

      <footer className="border-t border-stone-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Reylyn General Merchandise. All rights reserved.
      </footer>
    </div>
  )
}
