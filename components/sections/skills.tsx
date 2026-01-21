"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  category: string
}

const skills: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "PyTorch", category: "ML/AI" },
  { name: "TensorFlow", category: "ML/AI" },
  { name: "LangChain", category: "ML/AI" },
  { name: "Hugging Face", category: "ML/AI" },
  { name: "OpenAI API", category: "ML/AI" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tools" },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

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

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const usedCategories = ["All", ...new Set(skills.map(s => s.category))]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 bg-secondary/20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Skills & Tools</h2>
          <div className="mt-4 h-px w-16 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Technologies and tools I use to build intelligent systems and AI-powered applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {usedCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <span className="text-sm font-medium text-foreground text-center">
                {skill.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "Years of Experience", value: "4+" },
            { label: "Projects Completed", value: "30+" },
            { label: "ML Models Deployed", value: "15+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-card border border-border"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
