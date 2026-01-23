"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Me</h2>
          <div className="mt-4 h-px w-16 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image - Smaller */}
          <div className={`lg:col-span-2 flex justify-center transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative group">
              <div className="relative w-48 h-48 sm:w-72 sm:h-72 rounded-lg overflow-hidden bg-secondary">
                <Image
                  src="https://avatars.githubusercontent.com/u/125759356?v=4"
                  alt="Sebastián Yepes"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-primary/30 rounded-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m an AI Engineer with 2 years of experience, combining a strong foundation in software engineering with cloud-native architectures to build and deploy LLM-powered systems in real production environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work focuses on designing scalable AI solutions such as RAG pipelines, agent-based architectures, and asynchronous AI workflows that integrate seamlessly with existing platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I primarily work with FastAPI-based backends and AWS services including S3, Lambda, RDS, KMS, and EKS, using orchestration tools like Airflow to manage background tasks and data flows.
            </p>

            {/* Skills List */}
            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-4">
                Technologies I work with:
              </p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "LangChain / ADK",
                  "OpenAI API",
                  "Snowflake",
                  "AWS (S3, Lambda, EKS)",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">-</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
