"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  companyUrl?: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior AI Engineer",
    company: "Tech Company",
    companyUrl: "#",
    period: "2023 - Present",
    description: [
      "Lead development of LLM-powered applications serving thousands of users daily.",
      "Designed and implemented RAG systems improving information retrieval accuracy by 40%.",
      "Collaborate with cross-functional teams to integrate AI solutions into existing products.",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI", "AWS"],
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Startup",
    companyUrl: "#",
    period: "2021 - 2023",
    description: [
      "Developed computer vision models for automated quality inspection systems.",
      "Built scalable ML pipelines processing millions of data points daily.",
      "Optimized model inference reducing latency by 60% while maintaining accuracy.",
    ],
    technologies: ["TensorFlow", "Python", "Docker", "Kubernetes", "GCP"],
  },
  {
    title: "Data Scientist",
    company: "Analytics Corp",
    companyUrl: "#",
    period: "2020 - 2021",
    description: [
      "Created predictive models for customer behavior analysis.",
      "Implemented automated reporting systems using Python and SQL.",
      "Collaborated with stakeholders to translate business requirements into technical solutions.",
    ],
    technologies: ["Python", "SQL", "Scikit-learn", "Pandas", "Tableau"],
  },
]

const education = [
  {
    degree: "Bachelor’s Degree in Systems Engineering (awaiting graduation ceremony)",
    institution: "Universidad Distrital Francisco José de Caldas",
    period: "2021 - 2025",
    description:
      "Strong foundation in software engineering, data systems, and distributed architectures. Honors: Monitor of the Systems Engineering Curriculum Project, supporting academic and technical initiatives.",
    location: "Bogotá, Colombia",
  },
  {
    degree: "AWS Academy Cloud Foundations",
    institution: "Amazon Web Services (AWS)",
    period: "2024",
    description:
      "Hands-on training in cloud computing fundamentals, including AWS core services, security best practices, scalable architectures, and deployment patterns used in production environments.",
    location: "Bogotá, Colombia",
  },
];


export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"work" | "education">("work")

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
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Experience</h2>
          <div className="mt-4 h-px w-16 bg-primary mx-auto" />
        </div>

        {/* Tab Buttons */}
        <div className={`flex justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === "work"
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === "education"
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            Education
          </button>
        </div>

        {/* Content */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {activeTab === "work" ? (
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="group relative grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-8 p-6 rounded-lg transition-all duration-300 hover:bg-secondary/30"
                >
                  {/* Period */}
                  <div className="text-sm font-mono text-muted-foreground lg:text-right">
                    {exp.period}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2 flex-wrap">
                      {exp.title}
                      <span className="text-primary">@</span>
                      <a
                        href={exp.companyUrl}
                        className="text-primary hover:underline inline-flex items-center gap-1 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((desc) => (
                        <li
                          key={desc}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-0.5 shrink-0">-</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="group relative grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-8 p-6 rounded-lg transition-all duration-300 hover:bg-secondary/30"
                >
                  {/* Period */}
                  <div className="text-sm font-mono text-muted-foreground lg:text-right">
                    {edu.period}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary text-sm mb-3">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
