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

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.236 2.686.236v2.953h-1.514c-1.491 0-1.955.93-1.955 1.886v2.272h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" />
    </svg>
  )
}

function MessengerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 2C6.477 2 2 6.166 2 11.303c0 2.93 1.46 5.57 3.83 7.29V22l3.51-1.93c.85.24 1.74.37 2.66.37 5.523 0 10-4.166 10-9.137C22 6.166 17.523 2 12 2Zm.99 12.25-2.55-2.72-4.98 2.72 5.48-5.82 2.49 2.72 5.04-2.72-5.48 5.82Z" />
    </svg>
  )
}

function MapsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        fill="#34A853"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
      />
      <path
        fill="#4285F4"
        d="M12 2c-1.45 0-2.77.44-3.88 1.19L12 9l3.88-5.81A6.96 6.96 0 0 0 12 2Z"
      />
      <path
        fill="#FBBC04"
        d="M5.42 6.08A6.96 6.96 0 0 0 5 9c0 1.64.72 3.55 1.63 5.39L12 9 5.42 6.08Z"
      />
      <path
        fill="#EA4335"
        d="M18.58 6.08 12 9l5.37 5.39C18.28 12.55 19 10.64 19 9c0-1.06-.24-2.05-.67-2.92l.25-.0Z"
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  )
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
        <a href={branch.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"><FacebookIcon />Visit Facebook <ArrowIcon /></a>
        <a href={branch.maps} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-50 px-4 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"><MapsIcon />Get Directions <ArrowIcon /></a>
        <a href={`tel:${branch.phone.replaceAll(' ', '')}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-200"><CallIcon />Call {branch.locs}</a>
        <a href={`sms:${branch.phone.replaceAll(' ', '')}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-200"><SmsIcon />Text {branch.locs}</a>
        <a
  href={branch.messenger}
  target="_blank"
  rel="noreferrer"
  className="sm:col-span-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-200"
>
  <MessengerIcon />
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
