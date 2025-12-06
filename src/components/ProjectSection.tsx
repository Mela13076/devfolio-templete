import  ProjectCard  from "./ProjectCard";
import { projects } from '@/contents/projects'

export default function ProjectSection() {
    return(
      <section id="projects" className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0,3).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>  
    )
}