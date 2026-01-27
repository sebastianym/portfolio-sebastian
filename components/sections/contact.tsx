"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
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
      id="contact"
      className="relative py-24 sm:py-32 bg-secondary/20"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Get In Touch</h2>
          <div className="mt-4 h-px w-16 bg-primary mx-auto" />
        </div>

        <p className={`text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          I&apos;m currently open to new opportunities and collaborations.
          Whether you have a question, want to discuss a project, or simply want to connect, feel free to reach out.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            asChild
          >
            <a href="mailto:syepesm05@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Say Hello
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Contact Info Cards */}
        <div className={`grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="p-6 rounded-lg bg-card border border-border text-center">
            <Mail className="h-6 w-6 text-primary mb-3 mx-auto" />
            <h3 className="text-sm font-medium text-foreground mb-1">Email</h3>
            <a
              href="mailto:syepesm05@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              syepesm05@gmail.com
            </a>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border text-center">
            <MapPin className="h-6 w-6 text-primary mb-3 mx-auto" />
            <h3 className="text-sm font-medium text-foreground mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">
              (Remote / Worldwide)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
