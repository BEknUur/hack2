"use client"

import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

export function AchievementsSection() {
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
            We've Proven It
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ 2 Major Hackathons • Battle-Tested Community</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          {/* Images Left */}
          <div className="flex flex-col gap-8">
            {/* Decentrathon */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-4 overflow-hidden rounded-lg border border-foreground/10">
                <div className="relative h-64 w-full">
                  <Image
                    src="/decentrathon.jpeg"
                    alt="Decentrathon 4.0 - Our Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-2xl font-light text-foreground">
                   HackNU
                </h3>
              </div>
            </div>

            {/* HackNU */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="mb-4 overflow-hidden rounded-lg border border-foreground/10">
                <div className="relative h-64 w-full">
                  <Image
                    src="/hacknu.jpeg"
                    alt="HackNU - Our Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-2xl font-light text-foreground">
                   Decentrathon 4.0
                </h3>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-8">
              {/* Decentrathon Stats */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <p className="text-sm text-foreground/80 md:text-base">
                    <strong>3rd Place</strong> among 400+ teams
                  </p>
                  <p className="text-sm text-foreground/80 md:text-base">
                    <strong>1,000,000 Tenge</strong> Prize
                  </p>
                  <p className="text-sm text-foreground/80 md:text-base">
                    Largest hackathon in Central Asia
                  </p>
                </div>
              </div>

              {/* HackNU Stats */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <p className="text-sm text-foreground/80 md:text-base">
                    <strong>3rd Place</strong> among 800+ participants
                  </p>
                  <p className="text-sm text-foreground/80 md:text-base">
                    <strong>800+ Developers</strong> competed
                  </p>
                  <p className="text-sm text-foreground/80 md:text-base">
                    University hackathon benchmark
                  </p>
                </div>
              </div>

              {/* Motivation */}
              <div className="space-y-4 border-t border-foreground/10 pt-8">
                <h3 className="font-sans text-3xl font-light leading-[1.1] text-foreground">
                  Now Abu Dhabi
                </h3>
                <p className="text-base leading-relaxed text-foreground/90">
                  We've tasted victory twice. We've competed at the highest level. We've beaten hundreds of teams. 
                  Now we're bringing ReasonScope to Abu Dhabi with K2 Think—because we don't just want to compete. 
                  <strong> We want to win.</strong>
                </p>
                <div className="space-y-2 pt-4">
                  <p className="text-sm text-foreground/80">
                    Proven execution under pressure
                  </p>
                  <p className="text-sm text-foreground/80">
                    Track record of innovation & delivery
                  </p>
                  <p className="text-sm text-foreground/80">
                    Team that doesn't settle for second best
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
