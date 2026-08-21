import * as React from "react"
import { Download, Terminal } from "lucide-react"

import { SectionShell } from "./SectionShell"
import { Button } from "./ui/button"

const focusAreas = [
  "Backend & frontend development with Java, Python, JavaScript, and TypeScript",
  "API design, integrations, and ServiceNow platform expertise",
  "Observability, monitoring (Grafana, Dynatrace), and reliability engineering",
  "Automation, CI/CD pipelines, and enterprise software delivery",
  "Cloud technologies (AWS), containerization, and infrastructure automation",
]

const profileRows = [
  { label: "role", value: "Software Engineer @ PNC" },
  { label: "languages", value: "Java · Python · TS · C++ · C#" },
  { label: "runtime", value: "React · Node.js · REST APIs" },
  { label: "cloud", value: "AWS · Docker · Kubernetes" },
  { label: "observability", value: "Grafana · Dynatrace · BigPanda" },
  { label: "status", value: "building systems that scale" },
]

export const About: React.FC = () => {
  return (
    <SectionShell
      id="about"
      title="About"
      tagline="~ whoami — the engineer behind the uptime"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        {/* Narrative */}
        <div className="space-y-5 text-base leading-relaxed text-[#c7cdd4]">
          <p>
            I'm a Software Engineer with a passion for building robust,
            scalable systems that make a real impact. My expertise spans
            backend development, frontend technologies, and the full spectrum
            of modern application development.
          </p>
          <p>At PNC, I work on application development and backend engineering, focusing on:</p>

          <ul className="space-y-2.5">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[3px] font-mono text-[#f5b04c]">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
                      I'm driven by a commitment to write clean, maintainable code and
                      build systems that engineers can trust.
                    </p>
                  </div>

        {/* Instrumented profile card */}
        <div className="console-panel overflow-hidden">
          <div className="flex items-center gap-2 border-b border-[#23292f] bg-[#0e1115] px-4 py-3">
            <Terminal className="size-4 text-[#f5b04c]" />
            <span className="font-mono text-[13px] text-[#e7e9ec]">
              hayti.profile
            </span>
          </div>
          <dl className="divide-y divide-[#23292f]">
            {profileRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <dt className="shrink-0 font-mono text-xs tracking-wider text-[#8b95a1]">
                  {row.label}
                </dt>
                <dd className="font-mono text-[13px] text-[#e7e9ec]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-[#23292f] px-4 py-3">
            <Button
                          asChild
                          size="sm"
                          className="h-9 w-full rounded-md font-mono text-xs bg-[#f5b04c] text-[#1a1205] hover:bg-[#f5b04c]/90"
                        >
                          <a href="mailto:hemankafley@gmail.com?subject=Resume%20request">
                            <Download className="size-4" /> request resume.pdf
                          </a>
                        </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}