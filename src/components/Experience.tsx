import * as React from "react"
import { Calendar } from "lucide-react"

import { SectionShell } from "./SectionShell"
import { Separator } from "./ui/separator"

interface ExperienceItem {
  title: string
  company: string
  period: string
  serviceId: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "PNC",
    period: "August 2024 — Present",
    serviceId: "SVC-02",
    description: [
      "Develop and maintain backend applications using Java and Python",
      "Implement frontend features with React and TypeScript",
      "Design and integrate APIs for enterprise systems",
      "Collaborate on ServiceNow API implementations",
      "Monitor application health using Grafana and Dynatrace",
      "Participate in incident response and reliability engineering",
    ],
    technologies: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "AWS",
      "Grafana",
      "Dynatrace",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "PNC Technology Development Program",
    company: "PNC",
    period: "August 2023 — August 2024",
    serviceId: "SVC-01",
    description: [
      "Rotational program across multiple technical domains",
      "Software Engineering: Backend development and system design",
      "Technology Operations: Infrastructure and platform management",
      "Site Reliability Engineering: Monitoring and incident response",
      "Data Analysis: Data processing and insights generation",
      "Enterprise Technology: Large-scale system integration",
    ],
    technologies: [
      "Java",
      "Python",
      "React",
      "AWS",
      "Kubernetes",
      "Ansible",
      "BigPanda",
      "SLOs",
      "CI/CD",
    ],
  },
]

export const Experience: React.FC = () => {
  return (
    <SectionShell
      id="experience"
      title="Experience"
      tagline="~ journalctl --unit hayti --since 2023 — a service record"
    >
      <div className="space-y-6">
        {experiences.map((exp) => (
          <article key={exp.serviceId} className="console-panel overflow-hidden">
            {/* Header row */}
            <div className="flex flex-col gap-3 border-b border-[#23292f] bg-[#0e1115] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="status-dot pulse bg-[#f5b04c]" />
                <div>
                  <h3 className="font-display text-lg font-medium text-[#e7e9ec]">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-[13px] text-[#f5b04c]">
                    {exp.company} · {exp.serviceId}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#8b95a1]">
                <Calendar className="size-3.5" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <ul className="space-y-2.5">
                {exp.description.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-[#c7cdd4]"
                  >
                    <span className="mt-[3px] font-mono text-[#f5b04c]">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="border-t border-[#23292f] px-5 py-3 sm:px-6">
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="badge badge-outline font-mono text-xs font-normal text-[#c7cdd4] transition-colors duration-200 hover:border-[#f5b04c]/50 hover:text-[#f5b04c]"
                                  >
                                    {tech}
                                  </span>
                                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {experiences.length > 1 && (
        <Separator className="my-10" />
      )}
    </SectionShell>
  )
}