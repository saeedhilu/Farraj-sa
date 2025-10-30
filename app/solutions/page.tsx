import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Factory, Power, Settings, Shield, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Comprehensive electrical systems, power distribution, manufacturing automation, and control systems for industrial operations.",
}

const solutions = [
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Systems & Distribution",
    description: "End-to-end electrical engineering solutions for industrial facilities",
    features: [
      "High-voltage and low-voltage distribution systems",
      "Electrical design and engineering",
      "Installation and commissioning",
      "Preventive maintenance programs",
      "Emergency repair services",
      "Energy efficiency optimization",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Industrial Manufacturing Solutions",
    description: "Advanced manufacturing systems and process optimization",
    features: [
      "Production line design and optimization",
      "Quality control systems",
      "Lean manufacturing implementation",
      "Equipment procurement and installation",
      "Process automation",
      "Performance monitoring systems",
    ],
  },
  {
    id: "power",
    icon: Power,
    title: "Power & Energy Solutions",
    description: "Reliable power systems for critical industrial operations",
    features: [
      "Power generation systems",
      "Uninterruptible power supply (UPS)",
      "Emergency backup systems",
      "Power quality analysis",
      "Load management solutions",
      "Renewable energy integration",
    ],
  },
  {
    id: "automation",
    icon: Settings,
    title: "Automation & Control Systems",
    description: "State-of-the-art automation for streamlined operations",
    features: [
      "SCADA systems implementation",
      "PLC programming and integration",
      "Industrial IoT solutions",
      "Process control optimization",
      "Remote monitoring systems",
      "Predictive maintenance solutions",
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Compliance",
    description: "Comprehensive safety systems and regulatory compliance",
    features: [
      "Safety system design and implementation",
      "Fire detection and suppression",
      "Emergency shutdown systems",
      "Compliance audits and certification",
      "Safety training programs",
      "Risk assessment and mitigation",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing maintenance and technical support services",
    features: [
      "24/7 emergency support",
      "Preventive maintenance programs",
      "Spare parts management",
      "Equipment upgrades and retrofits",
      "Performance optimization",
      "Technical training and documentation",
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <HeroSection
        title="Comprehensive Industrial Solutions"
        subtitle="From electrical systems to automation, we deliver integrated solutions that drive operational excellence"
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "/case-studies" }}
        backgroundImage="/industrial-control-room.jpg"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={solution.id} id={solution.id} className="scroll-mt-20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                        <CardDescription className="text-base">{solution.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
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
