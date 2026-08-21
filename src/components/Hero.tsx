import * as React from "react"
import { ArrowRight, ExternalLink, Briefcase, Code, Mail } from "lucide-react"

import { Button } from "./ui/button"
import { cn } from "../lib/utils"

/* System-health readout — reads like an observability dashboard, but the
   labels speak plainly so any visitor understands it at a glance. */
const statusRows = [
  { label: "role", value: "Software Engineer @ PNC", cls: "text-[#e7e9ec]" },
  {
    label: "focus",
    value: "backend · APIs · cloud · automation",
    cls: "text-[#f5b04c]",
  },
  {
    label: "experience",
    value: "3+ years · enterprise production systems",
    cls: "text-[#c7cdd4]",
  },
  {
    label: "observability",
    value: "Grafana · Dynatrace · BigPanda · SLOs",
    cls: "text-[#5bc3e0]",
  },
  {
    label: "stack",
    value: "Java · Python · AWS · Ansible · ServiceNow",
    cls: "text-[#c7cdd4]",
  },
  {
    label: "status",
    value: "Available for Software Engineer · SRE · Platform roles",
    cls: "text-[#4caf7d]",
    ok: true,
  },
]

export const Hero: React.FC = () => {
  const [visible, setVisible] = React.useState(0)
  const [done, setDone] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false
    let i = 0
    const t = setInterval(() => {
      if (cancelled) return
      i += 1
      if (i <= statusRows.length) {
        setVisible(i)
      } else {
        clearInterval(t)
        setDone(true)
      }
    }, 320)
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
                  Let's Connect <ExternalLink className="size-4" />
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

          {/* Right — system health readout */}
          <div className="lg:pl-4">
            <div className="console-panel overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#23292f] bg-[#0e1115] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#3a444f]" />
                  <span className="size-2.5 rounded-full bg-[#3a444f]" />
                  <span className="size-2.5 rounded-full bg-[#3a444f]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#4caf7d]" />
                  <span className="font-mono text-xs text-[#6c757f]">
                    system health · hayti@kafley
                  </span>
                </div>
              </div>

              <div className="min-h-[280px] bg-[#0a0c0e] p-6 font-mono text-[13px] leading-relaxed">
                {statusRows.map((row, i) => {
                  if (i >= visible) return null
                  return (
                    <div
                                          key={row.label}
                                          className="flex items-baseline gap-4 py-1.5"
                                        >
                      <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8b95a1]">
                        {row.label}
                      </span>
                      <span className={cn("flex-1", row.cls)}>
                        <span className="text-[#e7e9ec]">{row.value}</span>
                      </span>
                    </div>
                  )
                })}

                {/* Blinking cursor keeps the "live system" feel */}
                {(done || visible < statusRows.length) && (
                  <div className="flex items-baseline gap-4 py-1.5">
                    <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6b757f]">
                      prompt
                    </span>
                    <span className="inline-block">
                      <span className="animate-cursor-blink text-[#f5b04c]">
                        ▊
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}