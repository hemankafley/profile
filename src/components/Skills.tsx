import * as React from "react"

import { SectionShell } from "./SectionShell"

interface SkillCategory {
  title: string
  id: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    id: "languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    id: "frontend",
    skills: ["React", "Angular", "JavaScript", "TypeScript", "UI/UX Design"],
  },
  {
    title: "Backend",
    id: "backend",
    skills: ["Java", "Python", "Node.js", "REST APIs", "API Integrations", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    id: "cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Ansible", "CI/CD", "Infrastructure as Code"],
  },
  {
    title: "Observability & Reliability",
    id: "observability",
    skills: ["Grafana", "Dynatrace", "BigPanda", "SLOs", "Monitoring", "Incident Response", "SRE"],
  },
  {
    title: "Enterprise Tools",
    id: "enterprise",
    skills: ["ServiceNow", "Archer", "Ansible Automation Platform", "XMP", "SyslogNG"],
  },
]

export const Skills: React.FC = () => {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      tagline="~ skills --installed — an instrumented capability set"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.id} className="console-panel flex flex-col p-5">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="size-2 rounded-sm bg-[#f5b04c]" />
              <h3 className="font-mono text-sm tracking-wide text-[#e7e9ec]">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="badge badge-outline font-mono text-xs font-normal text-[#c7cdd4] transition-colors duration-200 hover:border-[#f5b04c]/50 hover:text-[#f5b04c]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}