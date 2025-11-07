import Image from 'next/image'

export default function Hero(){ 
  return (
    <section className="mt-8 grid md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold">Kundan Kumar</h1>
        <p className="mt-3 text-lg">Full Stack Developer — MERN / Next.js | AI Integration | Building production-ready apps</p>
        <div className="mt-6 flex gap-4">
          <a href="/assets/resume/Kundan_Kumar_resume.pdf" download className="inline-block bg-black text-white px-5 py-2 rounded-md">Download Resume</a>
          <a href="#projects" className="inline-block border px-5 py-2 rounded-md">View Projects</a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="p-6 bg-white rounded-xl shadow text-sm">
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-xs">Itaharwa, Dularpur Sitamarhi, Bihar – 843332</div>
          <div className="mt-1 text-xs">+91 8789783987</div>
          <div className="mt-1 text-xs">kundansinghh87@gmail.com</div>
        </div>
      </div>
    </section>
  )
}
