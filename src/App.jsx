import React from 'react'

const logoUrl = 'https://njxdthtkf2ypbmoq.public.blob.vercel-storage.com/logo.webp'

const branches = [
  {
    name: 'Brgy. 171 Bagumbong, Caloocan City Branch',
    location: 'Brgy. 171 Bagumbong, Caloocan City',
    locs:'Bagumbong Branch',
    phone: '0922 831 5440',
    facebook: 'https://facebook.com/reylyngeneralmerchandisebagumbong',
    messenger: 'https://m.me/518341194693638/',
    maps: 'https://maps.app.goo.gl/wRGExJZQXqptjnfWA',
    accent: 'bg-amber-500'
  },
  {
    name: 'Marilao, Bulacan Branch',
    location: 'Sta. Rosa I, Marilao, Bulacan',
    locs: 'Sta. Rosa I Branch',
    phone: '0919 233 1955',
    facebook: 'https://facebook.com/reylyngeneralmerchandisestarosa',
    messenger: 'https://m.me/281507361722042/',
    maps: 'https://maps.app.goo.gl/4JjNPM7K1A8Gd6eT6',
    accent: 'bg-amber-500',
  },
]

const link = 
  {
    mess: 'https://njxdthtkf2ypbmoq.public.blob.vercel-storage.com/messenger.svg',
    fb: 'https://njxdthtkf2ypbmoq.public.blob.vercel-storage.com/fb.svg',
    gmaps: 'https://njxdthtkf2ypbmoq.public.blob.vercel-storage.com/gmaps.svg' 
  }

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function CallIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}

function SmsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
    >
      <path d="M20 3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
      <path d="M7 9h10M7 13h6" />
    </svg>
  )
}

function BranchCard({ branch, index }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
      <div className={`absolute inset-x-0 top-0 h-1.5 ${branch.accent}`} />
      <h3 className="mt-3 text-3xl font-bold text-slate-900">{branch.name}</h3>

      <div className="mt-7 space-y-4 border-y border-stone-100 py-6 text-slate-600">
        <div className="flex items-start gap-3"><span className="mt-0.5 text-teal-700"><PinIcon /></span><p>{branch.location}</p></div>
        <div className="flex items-center gap-3"><span className="text-teal-700"><PhoneIcon /></span><a className="font-semibold text-slate-700 hover:text-teal-700" href={`tel:${branch.phone.replaceAll(' ', '')}`}>{branch.phone}</a></div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href={branch.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"><img src={link.fb} alt="Facebook Icon" className="h-5 w-5"></img>Visit Facebook <ArrowIcon /></a>
        <a href={branch.maps} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-50 px-4 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"><img src={link.gmaps} alt="Google Maps Icon" className="h-5 w-5"></img>Get Directions <ArrowIcon /></a>
        <a href={`tel:${branch.phone.replaceAll(' ', '')}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-200"><CallIcon />Call {branch.locs}</a>
        <a href={`sms:${branch.phone.replaceAll(' ', '')}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-200"><SmsIcon />Text {branch.locs}</a>
        <a
  href={branch.messenger}
  target="_blank"
  rel="noreferrer"
  className="sm:col-span-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-200"
>
  <img src={link.mess} alt="Messenger Icon" className="h-5 w-5"></img>
  <span>Message {branch.locs}</span>
  <ArrowIcon />
</a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="relative isolate bg-teal-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_20%_0%,#5eead4_0,transparent_30%),radial-gradient(circle_at_90%_80%,#fbbf24_0,transparent_25%)]" />
        <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center sm:pb-28 sm:pt-20 lg:px-8">
          <img src={logoUrl} alt="Reylyn General Merchandise logo" className="mx-auto mt-7 h-auto w-100% max-width-100px object-contain drop-shadow-2xl sm:w-36 lg:w-44" />
          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Reylyn<br className="hidden sm:block" /> General Merchandise</h1>
          <a href="#branches" className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-teal-950">Find a branch <ArrowIcon /></a>
        </section>
      </header>

      <main id="branches" className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {branches.map((branch, index) => <BranchCard key={branch.name} branch={branch} index={index} />)}
        </div>
      </main>
    </div>
  )
}
