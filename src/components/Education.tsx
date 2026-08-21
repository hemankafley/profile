import * as React from "react"
import { GraduationCap } from "lucide-react"

import { SectionShell } from "./SectionShell"

export const Education: React.FC = () => {
  return (
    <SectionShell
      id="education"
      title="Education"
      tagline="my academic background in computer science"
    >
      <div className="console-panel max-w-2xl p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-[#f5b04c]/40 bg-[#f5b04c]/10">
            <GraduationCap className="size-6 text-[#f5b04c]" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-xl font-medium text-[#e7e9ec]">
              Bachelor of Science in Computer Science
            </h3>
            <p className="font-mono text-[14px] text-[#f5b04c]">
              Miami University
            </p>
            <p className="font-mono text-xs text-[#8b95a1]">May 2023</p>
            <p className="pt-2 text-[15px] leading-relaxed text-[#c7cdd4]">
              Graduated with a strong foundation in software engineering,
              algorithms, systems design, and full-stack application
              development.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}