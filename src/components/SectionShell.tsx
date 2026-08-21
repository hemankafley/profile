import * as React from "react"
import { cn } from "../lib/utils"

interface SectionShellProps {
  id: string
  title: string
  tagline: string
  children: React.ReactNode
  className?: string
}

/* Consistent console section: hairline top, display title, mono tagline. */
export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  title,
  tagline,
  children,
  className,
}) => (
  <section id={id} className={cn("py-20 md:py-28", className)}>
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 max-w-2xl space-y-3">
        <h2 className="section-title">{title}</h2>
        <p className="font-mono text-[13px] leading-relaxed text-[#8b95a1]">
          {tagline}
        </p>
      </div>
      {children}
    </div>
  </section>
)