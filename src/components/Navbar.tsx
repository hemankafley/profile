import * as React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "./ui/button"
import { cn } from "../lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#certifications" },
  { label: "Education", href: "#education" },
]

const ConsoleMark: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href="#home"
    className={cn(
      "group inline-flex items-center gap-2 font-mono text-sm",
      className
    )}
  >
    <span className="status-dot pulse bg-[#f5b04c]" />
    <span className="font-mono text-[#e7e9ec]">hayti@kafley</span>
    <span className="font-mono text-[#f5b04c]">:~$</span>
  </a>
)

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-[#23292f] bg-[#0b0d10]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          <ConsoleMark />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 font-mono text-[13px] text-[#c7cdd4] rounded-md hover:bg-white/5 hover:text-[#e7e9ec] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-2 font-mono text-[13px] rounded-md bg-[#f5b04c] text-[#1a1205] hover:bg-[#f5b04c]/90"
            >
              <a href="#contact">
                <span className="status-dot bg-[#1a1205]" />
                Open a channel
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="lg:hidden text-[#e7e9ec] p-2 rounded-md hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 border-t border-[#23292f] px-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 font-mono text-[13px] text-[#c7cdd4] rounded-md hover:bg-white/5 hover:text-[#e7e9ec] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="mb-1 font-mono text-[13px] rounded-md bg-[#f5b04c] text-[#1a1205] hover:bg-[#f5b04c]/90"
            >
              <a href="#contact">Open a channel</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}