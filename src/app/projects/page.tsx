"use client";

import { projects } from "@/contents/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animations";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const skillFilter = searchParams.get("skill");

  // Filter projects based on skill parameter
  const filteredProjects = skillFilter
    ? projects.filter((project) =>
        project.skills?.some(
          (skill) => skill.toLowerCase() === skillFilter.toLowerCase()
        )
      )
    : projects;

  return (
    <div className="container max-w-7xl mx-auto py-12 relative z-10">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {skillFilter ? `Projects using ${skillFilter}` : "My Projects"}
      </motion.h1>
      <motion.p
        className={`text-lg text-secondary text-center ${skillFilter ? 'mb-8' : 'mb-24'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skillFilter
          ? `Showing ${filteredProjects.length} project${
              filteredProjects.length !== 1 ? "s" : ""
            } that use ${skillFilter}`
          : "Here are some of my recent projects. Click on the links to view the code or live demo."}
      </motion.p>

      {skillFilter && (
        <div className="text-center mb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            ← View all projects
          </Link>
        </div>
      )}

      {filteredProjects.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-secondary mb-4">
            No projects found using {skillFilter}
          </p>
          <Link href="/projects" className="text-primary hover:underline">
            View all projects
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense
      fallback={
        <div className="container max-w-7xl mx-auto py-12 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
          <p className="text-lg text-secondary mb-24 text-center">Loading...</p>
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
