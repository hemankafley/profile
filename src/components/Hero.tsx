import * as React from "react"
import { ArrowRight, ExternalLink, Briefcase, Code, Mail } from "lucide-react"

import { Button } from "./ui/button"
import { cn } from "../lib/utils"

/* Typewriter boot sequence — the whole "system" reports itself. */
const bootLines = [
  { text: "$ whoami", cls: "text-[#e7e9ec]" },
  { text: "hayti.kafley — software engineer @ PNC", cls: "text-[#9fb4a8]" },
  { text: "$ hayti --focus", cls: "text-[#e7e9ec]" },
  {
    text: "reliability · observability · backend · scalable systems",
    cls: "text-[#f5b04c]",
  },
  { text: "$ systemctl status hayti", cls: "text-[#e7e9ec]" },
  { text: "● active (running) — since aug 2023", cls: "text-[#9fb4a8]" },
  { text: "$ uptime", cls: "text-[#e7e9ec]" },
  { text: "3+ yrs enterprise software · PNC Technology Program", cls: "text-[#c7cdd4]" },
  { text: "$ signal --observability", cls: "text-[#e7e9ec]" },
  {
    text: "grafana · dynatrace · bigpanda · slos — all nominal",
    cls: "text-[#5bc3e0]",
  },
  { text: "$ status", cls: "text-[#e7e9ec]" },
  {
    text: "OK — building systems that hold under load",
    cls: "text-[#4caf7d]",
  },
]

export const Hero: React.FC = () => {
  const [visible, setVisible] = React.useState(0)
  const [typed, setTyped] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false
    let i = 0
    const t = setInterval(() => {
      if (cancelled) return
      i += 1
      if (i <= bootLines.length) {
        setVisible(i)
      } else {
        clearInterval(t)
        setTyped(true)
      }
    }, 240)
    return () => {
      cancelled = true
      clearInterval(t)
    }
  }, [])

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hayti-kafley-2b602615a/",
      icon: Briefcase,
    },
    { name: "GitHub", href: "https://github.com/hemankafley", icon: Code },
    { name: "Email", href: "mailto:hemankafley@gmail.com", icon: Mail },
  ]

  return (
    <section
      id="home"
      className="console-grid relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="status-dot pulse bg-[#4caf7d]" />
              <span className="term-label text-[#4caf7d]">
                status: online · open to senior/backend/sre opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-medium tracking-tight text-[#e7e9ec] sm:text-5xl md:text-6xl">
                Hayti Kafley
              </h1>
              <p className="font-display text-xl font-medium text-[#f5b04c] md:text-2xl">
                Software Engineer — reliability, observability &amp; backend
                systems
              </p>
              <p className="max-w-xl text-balance text-base leading-relaxed text-[#c7cdd4] md:text-lg">
                I build reliable, scalable, and user-focused applications at
                PNC — specializing in backend engineering, automation,
                observability, and dependable software delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-md font-mono text-sm bg-[#f5b04c] text-[#1a1205] hover:bg-[#f5b04c]/90"
              >
                <a href="#experience">
                  view experience <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md font-mono text-sm border-[#2a313a] text-[#c7cdd4] hover:bg-white/5 hover:text-[#e7e9ec]"
              >
                <a href="#contact">
                  open an sre channel <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-[#2a313a] bg-[#111418] text-[#8b95a1] transition-colors hover:border-[#f5b04c]/60 hover:text-[#f5b04c]"
                >
                  <s.icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — boot console */}
          <div className="lg:pl-4">
            <div className="console-panel overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#23292f] bg-[#0e1115] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#3a444f]" />
                  <span className="size-2.5 rounded-full bg-[#3a444f]" />
                  <span className="size-2.5 rounded-full bg-[#3a444f]" />
                </div>
                <span className="font-mono text-xs text-[#6c757f]">
                  hayti@kafley: ~
                </span>
              </div>

              <div className="min-h-[300px] space-y-1.5 bg-[#0a0c0e] p-5 font-mono text-[13px] leading-relaxed">
                {bootLines.map((line, i) => {
                  if (i >= visible) {
                    return i === visible ? (
                      <span key={i} className="inline-block">
                        <span className="animate-cursor-blink text-[#f5b04c]">
                          ▊
                        </span>
                      </span>
                    ) : null
                  }
                  return (
                    <p key={i} className={cn("whitespace-pre-wrap", line.cls)}>
                      {line.text}
                    </p>
                  )
                })}
                {typed && (
                  <span className="inline-block">
                    <span className="animate-cursor-blink text-[#f5b04c]">
                      ▊
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}