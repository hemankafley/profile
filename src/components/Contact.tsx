import * as React from "react"
import { useState } from "react"
import { Mail, Briefcase as LinkedinIcon, Code as GithubIcon, Send } from "lucide-react"

import { SectionShell } from "./SectionShell"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { cn } from "../lib/utils"

const channels = [
  {
    name: "Email",
    value: "hemankafley@gmail.com",
    href: "mailto:hemankafley@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "Hayti Kafley",
    href: "https://www.linkedin.com/in/hayti-kafley-2b602615a/",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    value: "hemankafley",
    href: "https://github.com/hemankafley",
    icon: GithubIcon,
  },
]

type Status = "idle" | "success" | "error"

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState<Status>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } else {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const inputCls =
    "rounded-md border-[#2a313a] bg-[#0e1115] text-[#e7e9ec] placeholder:text-[#6c757f] focus-visible:ring-[#f5b04c]/60"

  return (
    <SectionShell
      id="contact"
      title="Contact"
      tagline="~ connect --open-channel — let's talk reliability, backend, or SRE"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Channels */}
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-[#c7cdd4]">
            I'm open to conversations about software engineering, backend
            development, SRE, observability, and senior engineering
            opportunities.
          </p>
          <div className="space-y-3">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="console-panel group flex items-center gap-4 p-4 transition-colors hover:border-[#f5b04c]/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#f5b04c]/40 bg-[#f5b04c]/10">
                  <channel.icon className="size-5 text-[#f5b04c] transition-transform group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs tracking-wider text-[#8b95a1]">
                    {channel.name}
                  </p>
                  <p className="truncate font-mono text-sm text-[#e7e9ec]">
                    {channel.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="console-panel p-6 sm:p-8">
          <h3 className="mb-6 font-display text-lg font-medium text-[#e7e9ec]">
            Send me a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputCls}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputCls}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={cn(inputCls, "min-h-[120px] resize-none")}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>

            <div
              aria-live="polite"
              className={cn(
                "rounded-md border px-4 py-3 font-mono text-[13px]",
                "transition-all",
                submitStatus === "success" &&
                  "border-[#4caf7d]/50 bg-[#4caf7d]/10 text-[#4caf7d]",
                submitStatus === "error" &&
                  "border-[#e2554d]/60 bg-[#e2554d]/10 text-[#e2554d]",
                submitStatus === "idle" && "hidden"
              )}
            >
              {submitStatus === "success"
                ? "✓ message queued — I'll get back to you soon."
                : "✗ failed — all fields are required."}
            </div>

            <Button
              type="submit"
              className="h-11 w-full rounded-md font-mono text-sm bg-[#f5b04c] text-[#1a1205] hover:bg-[#f5b04c]/90"
            >
              <Send className="size-4" /> send message
            </Button>
          </form>
        </div>
      </div>
    </SectionShell>
  )
}