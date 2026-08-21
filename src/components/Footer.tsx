import * as React from "react"
import { Code as GithubIcon, Briefcase as LinkedinIcon, Mail } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#23292f] bg-[#0e1115]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Mark */}
          <div className="inline-flex items-center gap-2 font-mono text-sm">
            <span className="status-dot pulse bg-[#f5b04c]" />
            <span className="text-[#e7e9ec]">© {currentYear} Hayti Kafley</span>
            <span className="hidden text-[#f5b04c] sm:inline">:~$</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/hayti-kafley-2b602615a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-md border border-[#2a313a] bg-[#111418] text-[#8b95a1] transition-colors hover:border-[#f5b04c]/60 hover:text-[#f5b04c]"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://github.com/hemankafley"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-md border border-[#2a313a] bg-[#111418] text-[#8b95a1] transition-colors hover:border-[#f5b04c]/60 hover:text-[#f5b04c]"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="mailto:hemankafley@gmail.com"
              aria-label="Email"
              className="inline-flex size-9 items-center justify-center rounded-md border border-[#2a313a] bg-[#111418] text-[#8b95a1] transition-colors hover:border-[#f5b04c]/60 hover:text-[#f5b04c]"
            >
              <Mail className="size-4" />
            </a>
          </div>

          {/* Status line */}
          <p className="font-mono text-xs text-[#8b95a1]">
            <span className="text-[#4caf7d]">●</span> uptime: software @ PNC
            · since 2023 ·{" "}
            <span className="text-[#e7e9ec]">all systems nominal</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }