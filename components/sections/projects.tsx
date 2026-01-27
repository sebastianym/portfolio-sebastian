"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Folder } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: "Order Management System",
    description:
      "A scalable backend system for handling orders and product inventory using FastAPI, PostgreSQL, and Clean Architecture patterns. Implements APIs for creating, tracking, and managing orders, products, users, and related business logic.",
    image: "/img/image-order-management-system.png",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Clean Architecture"],
    github: "https://github.com/sebastianym/order-management-system",
    featured: true,
  },
  {
    title: "Observability & Logging Platform",
    description:
      "Demonstration application showcasing advanced observability and logging workflows. Includes intentional failure logs, Prometheus and Grafana integration for metrics dashboards, automated workflow orchestration with n8n, and notification/reporting tools.",
    image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp",
    technologies: ["Docker Compose", "Prometheus", "Grafana", "n8n"],
    github: "https://github.com/sebastianym/n8n-log-analyzer",
    featured: true,
  },
]

const otherProjects = [
  {
    title: "Traceroute Network Analyzer",
    description: "Web application for executing and visualizing traceroute operations from multiple geographic servers, enabling analysis of network hops, latency, and routing behavior.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "NextUI"],
    github: "https://github.com/sebastianym/traceroute-redes2",
  },
  {
    title: "Custom T-Shirt E-commerce Platform",
    description: "Modern e-commerce frontend for customizable t-shirt sales, featuring product configuration, shopping cart flow, and integration with a headless CMS backend.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Strapi"],
    github: "https://github.com/sebastianym/e-commerce-fis",
  },
  {
    title: "Equipment Loan Management System",
    description: "Frontend application for managing equipment lending, reservations, and returns, designed for institutional asset control and internal operations.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Strapi"],
    github: "https://github.com/sebastianym/si-frontend",
  }

]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="mt-4 h-px w-16 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            A selection of projects I’ve built around LLM-based systems, including RAG pipelines, AI agents, and production-ready AI workflows.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid lg:grid-cols-12 gap-6 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image - Smaller */}
              <div
                className={`lg:col-span-6 relative aspect-video rounded-lg overflow-hidden bg-secondary group ${index % 2 === 1 ? "lg:col-start-7" : ""}`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-6 lg:row-start-1 relative z-10 ${index % 2 === 1 ? "lg:col-start-1 lg:text-left" : "lg:col-start-7 lg:text-left"}`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card/90 backdrop-blur-sm p-5 rounded-lg border border-border mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-12">University projects</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(showAllProjects ? otherProjects : otherProjects.slice(0, 6)).map((project, index) => (
              <div
                key={project.title}
                className="group p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="h-8 w-8 text-primary" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {otherProjects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 rounded-lg border border-primary/50 text-primary font-medium transition-all duration-200 hover:bg-primary/10"
              >
                {showAllProjects ? "Show Less" : "Show More Projects"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
