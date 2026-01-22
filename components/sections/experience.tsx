"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer",
    company: "Construimos AG",
    period: "2025 - Present",
    description: [
      "Focused on designing and deploying LLM-powered systems in production, including RAG pipelines, AI agents, and asynchronous AI workflows. Worked with AWS-based architectures, FastAPI backends, vector stores, and observability tools to build scalable and reliable AI solutions.",
    ],
    technologies: ["LLMs", "RAG", "FastAPI", "AWS (EKS, S3, Lambda)", "Langfuse"],
  },
  {
    title: "Machine Learning Engineer",
    company: "Freelance",
    period: "2024 - 2025",
    description: [
      "Collaborated with startups and small teams to build early-stage AI features and automations. Implemented prompt-based workflows, basic RAG setups, and backend integrations using APIs, webhooks, and background task processing.",
    ],
    technologies: ["Prompt Engineering", "Vector Stores", "NLP", "Webhooks", "OpenAI SDK"],
  },
]

const education = [
  {
    degree: "Bachelor’s Degree in Systems Engineering",
    institution: "Universidad Distrital Francisco José de Caldas",
    period: "2021 - 2025",
    description:
      "Built a strong foundation in software engineering, algorithms, data structures, and system design, with a focus on designing scalable and reliable systems. Developed analytical thinking and problem-solving skills applicable to AI system design, cloud architectures, and production-grade machine learning and LLM-based solutions.",
    location: "Bogotá, Colombia",
  },
  {
    degree: "AWS Academy Cloud Foundations",
    institution: "Amazon Web Services (AWS)",
    period: "2024",
    description:
      "Gained hands-on experience with core AWS services and cloud-native concepts, including compute, storage, networking, security, and scalability. Developed a solid understanding of deploying and operating AI-driven systems on cloud infrastructure, with emphasis on reliability, security, and production readiness.",
    location: "Bogotá, Colombia",
  },
  {
    degree: "Complete Web Development Course",
    institution: "Udemy",
    period: "2023",
    description:
      "Learned end-to-end web application development using modern frontend and backend technologies. Built a strong foundation in software development practices, APIs, and system integration, which supports the implementation and deployment.",
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
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === "work"
              ? "bg-primary/10 text-primary border border-primary/30"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === "education"
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
                      <span
                        className="text-primary hover:underline inline-flex items-center gap-1 group/link"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                      </span>
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
