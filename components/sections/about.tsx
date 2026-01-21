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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-lg overflow-hidden bg-secondary">
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
              I&apos;m an AI Engineer with a strong background in machine learning and 
              software development. I specialize in building intelligent systems, 
              from natural language processing to computer vision applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise includes developing and deploying large language models, 
              creating RAG systems, and building end-to-end ML pipelines. I&apos;m passionate 
              about making AI accessible and useful for real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not training models or optimizing inference pipelines, you&apos;ll 
              find me exploring the latest research papers, contributing to open source 
              AI projects, or experimenting with new architectures.
            </p>

            {/* Skills List */}
            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-4">
                Technologies I work with:
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Python",
                  "PyTorch",
                  "TensorFlow",
                  "LangChain",
                  "OpenAI API",
                  "Hugging Face",
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
