import * as React from "react"
import { ShieldCheck } from "lucide-react"

import { SectionShell } from "./SectionShell"

interface Certification {
  title: string
  issuer: string
  year?: string
}

const certifications: Certification[] = [
  {
    title: "Product Management Certificate",
    issuer: "Cornell University",
    year: "2024",
  },
  {
    title: "ICAgile Certified Professional",
    issuer: "ICAgile",
    year: "2023",
  },
  {
    title: "Certified BigPanda Operator",
    issuer: "BigPanda",
    year: "2024",
  },
  {
    title: "AIOps Foundation",
    issuer: "The AIOps Community",
    year: "2024",
  },
]

export const Certifications: React.FC = () => {
  return (
    <SectionShell
      id="certifications"
      title="Credentials"
      tagline="~ certs --verify — validated professional credentials"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.title} className="console-panel flex items-start gap-4 p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#f5b04c]/40 bg-[#f5b04c]/10">
              <ShieldCheck className="size-5 text-[#f5b04c]" />
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="font-display text-base font-medium leading-snug text-[#e7e9ec]">
                {cert.title}
              </h3>
              <p className="font-mono text-[13px] text-[#f5b04c]">{cert.issuer}</p>
              {cert.year && (
                <p className="font-mono text-xs text-[#8b95a1]">{cert.year}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}