import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet, Flame, Zap, Factory, Building2, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Serving oil & gas, petrochemicals, power generation, manufacturing, infrastructure, and utilities sectors across the GCC.",
}

const industries = [
  {
    id: "oil-gas",
    icon: Droplet,
    title: "Oil & Gas",
    description: "Comprehensive electrical and automation solutions for upstream, midstream, and downstream operations",
    capabilities: [
      "Offshore platform electrical systems",
      "Pipeline monitoring and control",
      "Refinery automation",
      "Safety and emergency systems",
      "Hazardous area installations",
    ],
  },
  {
    id: "petrochemicals",
    icon: Flame,
    title: "Petrochemicals",
    description: "Specialized solutions for complex petrochemical processing facilities",
    capabilities: [
      "Process control systems",
      "Electrical distribution for chemical plants",
      "Instrumentation and monitoring",
      "Explosion-proof installations",
      "Continuous process optimization",
    ],
  },
  {
    id: "power",
    icon: Zap,
    title: "Power Generation",
    description: "Advanced systems for conventional and renewable power generation facilities",
    capabilities: [
      "Power plant electrical systems",
      "Control and monitoring systems",
      "Grid integration solutions",
      "Renewable energy systems",
      "Energy storage solutions",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description: "Integrated solutions for modern manufacturing operations",
    capabilities: [
      "Production line automation",
      "Quality control systems",
      "Energy management",
      "Predictive maintenance",
      "Industry 4.0 implementation",
    ],
  },
  {
    id: "infrastructure",
    icon: Building2,
    title: "Infrastructure",
    description: "Electrical and automation systems for critical infrastructure projects",
    capabilities: [
      "Smart building systems",
      "Transportation infrastructure",
      "Data center solutions",
      "Telecommunications facilities",
      "Public facility automation",
    ],
  },
  {
    id: "utilities",
    icon: Waves,
    title: "Utilities",
    description: "Solutions for water, wastewater, and utility management",
    capabilities: [
      "Water treatment plant automation",
      "Wastewater management systems",
      "SCADA implementation",
      "Remote monitoring solutions",
      "Asset management systems",
    ],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        title="Industries We Serve"
        subtitle="Delivering specialized solutions across diverse industrial sectors in the GCC region"
        primaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Solutions", href: "/solutions" }}
        backgroundImage="/industrial-sectors-collage.jpg"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.id} id={industry.id} className="scroll-mt-20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{industry.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {industry.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
