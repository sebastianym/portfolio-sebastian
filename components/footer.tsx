"use client"

import { Github, Mail } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { icon: Github, href: "https://github.com/sebastianym", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sebastianyepesmarta/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:syepesm05@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-primary"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} - syepesm05@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
