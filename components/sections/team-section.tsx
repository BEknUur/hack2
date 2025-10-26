"use client"

import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

const teamMembers = [
  {
    name: "Turarbek",
    role: "SWE Engineer",
    image: "/turarbek.jpg",
  },
  {
    name: "Sultan",
    role: "Junior AI Engineer",
    image: "/sultan.jpg",
  },
  {
    name: "Beknur",
    role: "Founding Engineer of MythicAI & Frontend Developer",
    image: "/beknur.jpg",
  },
  {
    name: "Nurdaulet",
    role: "Product Engineer & Project Lead",
    image: "/nurda.jpg",
  },
]

export function TeamSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="w-full max-w-7xl">
        <div
          className={`mb-16 transition-all duration-700 md:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Team
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Battle-Tested & Ready to Win</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4 overflow-hidden rounded-lg border border-foreground/10">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-light text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-foreground/70">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
