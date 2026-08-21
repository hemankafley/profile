import * as React from "react"
import { Calendar, MapPin } from "lucide-react"

import { SectionShell } from "./SectionShell"
import { Separator } from "./ui/separator"

interface Rotation {
  name: string
  bullets: string[]
}

interface TechBadge {
  label: string
  value: string
}

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  serviceId: string
  highlights?: TechBadge[]
  description: string[]
  rotations?: Rotation[]
  transition?: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "PNC",
    period: "Aug 2024 — Present",
    location: "Pittsburgh, PA",
    serviceId: "SVC-02",
    highlights: [
      { label: "apps modernized", value: "3" },
      { label: "faster data processing", value: "92%" },
      { label: "SLOs implemented", value: "✓" },
      { label: "deployments automated", value: "✓" },
    ],
    description: [
      "Develop and support enterprise applications across the full software lifecycle — backend development, API integration, deployment automation, observability, and production support.",
      "Modernized three enterprise applications supporting PNC's Technology organization by migrating ServiceNow integrations to updated tables, endpoints, and data structures. Identified the right ServiceNow resources, implemented required dot-walking relationships, validated integrations across environments, and deployed changes to production.",
      "Develop and integrate APIs to retrieve accurate business data and support application workflows, with a focus on reliability, data quality, and production readiness.",
      "Automated application deployments using Ansible Automation Platform, improving deployment consistency and reducing manual operational effort.",
      "Optimized data-retrieval scripts and processing logic, cutting execution time from roughly 2 minutes to 10 seconds — a 92% reduction — enabling faster access to business-critical data.",
      "Build monitoring and observability solutions with Grafana, Dynatrace, BigPanda, and other enterprise monitoring platforms to improve system visibility and operational awareness.",
      "Define and implement Service Level Objectives (SLOs) and monitoring practices to improve application reliability, establish measurable service performance standards, and identify issues earlier.",
      "Troubleshoot production issues, investigate incidents, perform root-cause analysis, and collaborate with engineering teams to resolve application and reliability issues.",
      "Partner with application, platform, and business teams to deliver reliable solutions supporting PNC's Technology organization.",
    ],
    technologies: [
      "Java",
      "Python",
      "TypeScript",
      "React",
      "AWS",
      "Ansible",
      "ServiceNow",
      "Grafana",
      "Dynatrace",
      "BigPanda",
      "SLOs",
    ],
  },
  {
    title: "Technology Development Program — Analyst",
    company: "PNC",
    period: "Aug 2023 — Aug 2024",
    location: "Pittsburgh, PA",
    serviceId: "SVC-01",
    description: [
      "Rotated through four technical domains at PNC — Technology Operations/SRE, Data Analysis, Software Engineering, and Security — and transitioned into a full-time Software Engineer role on completion.",
    ],
    rotations: [
      {
        name: "TechOps / SRE",
        bullets: [
          "Collaborated with the Business Technology Lead on incident and event handling using ServiceNow, Dynatrace, Mattermost, and Excel.",
          "Assisted in incident-report generation and management, ensuring timely resolution with minimal impact on operations.",
        ],
      },
      {
        name: "Data Analysis",
        bullets: [
          "Engaged with the RBA team to generate Oracle Analytics (OAS) reports, leveraging SQL for querying and report creation.",
          "Presented data-analysis insights to the team, aiding decision-making and improving operational efficiency.",
        ],
      },
      {
        name: "Software Engineering",
        bullets: [
          "Contributed to software development within the derivatives team, using Java and SQL for daily tasks.",
          "Spearheaded a new automation project for RPA (Risk Participation Agreement) reporting using Java and SQL.",
        ],
      },
      {
        name: "Security / Automation",
        bullets: [
          "Developed a Kore.ai bot that automates JIRA ticket creation and serves useful information, enabling seamless task management and interdepartmental communication.",
          "Implemented regression testing using webhooks, Jest, and TypeScript, improving code reliability and application stability across updates.",
        ],
      },
    ],
    transition:
      "Transitioned into a full-time Software Engineer role following successful completion of the program.",
    technologies: [
      "ServiceNow",
      "Dynatrace",
      "Mattermost",
      "Oracle Analytics",
      "SQL",
      "Java",
      "Kore.ai",
      "Jest",
      "TypeScript",
      "webhooks",
    ],
  },
]

export const Experience: React.FC = () => {
  return (
    <SectionShell
      id="experience"
      title="Professional Experience"
      tagline="a record of the systems I've built and run"
    >
      <div className="space-y-8">
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
                    {exp.company}
                    <span className="text-[#8b95a1]"> · {exp.serviceId}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[#8b95a1]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Impact highlights (SE role) */}
            {exp.highlights && (
                          <div className="grid grid-cols-2 gap-0.5 bg-[#23292f] sm:grid-cols-4 divide-x divide-[#23292f]">
                            {exp.highlights.map((h) => (
                              <div key={h.label} className="bg-[#111418] px-5 py-4">
                    <p className="font-display text-2xl font-medium text-[#f5b04c]">
                      {h.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8b95a1]">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

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

              {/* Rotations (TDP role) */}
              {exp.rotations && (
                <div className="mt-6 grid gap-3 lg:grid-cols-2">
                  {exp.rotations.map((rot) => (
                    <div
                      key={rot.name}
                      className="rounded-md border border-[#23292f] bg-[#0a0c0e]/40 p-4"
                    >
                      <p className="mb-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e7e9ec]">
                        {rot.name}
                      </p>
                      <ul className="space-y-2">
                        {rot.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[#c7cdd4]"
                          >
                            <span className="mt-[3px] shrink-0 font-mono text-[#5bc3e0]">
                              ▸
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {exp.transition && (
                <p className="mt-5 inline-flex items-start gap-2 rounded-md border border-[#4caf7d]/40 bg-[#4caf7d]/10 px-4 py-3 font-mono text-[13px] leading-relaxed text-[#4caf7d]">
                  <span className="mt-0.5">✓</span>
                  <span>{exp.transition}</span>
                </p>
              )}
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

      {experiences.length > 1 && <Separator className="my-10" />}
    </SectionShell>
  )
}