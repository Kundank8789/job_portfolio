import { projects } from '../data/projects'

function Tech({name}){
  return <span className="inline-block text-xs px-2 py-1 mr-2 mb-2 border rounded">{name}</span>
}

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projects.map((p,i)=> (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-2">{p.description}</p>
            <div className="mt-3">
              {p.tech.map((t,idx)=>(<Tech key={idx} name={t} />))}
            </div>
            <div className="mt-4 flex gap-3">
              <a href={p.live || '#'} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>
              <a href={p.github || '#'} target="_blank" rel="noreferrer" className="text-sm underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
