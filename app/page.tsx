import { HeroSection } from "@/components/sections/hero-section"
import { StatsBar } from "@/components/sections/stats-bar"
import { SolutionsGrid } from "@/components/sections/solutions-grid"
import { CaseStudyCard } from "@/components/sections/case-study-card"
import { CTASection } from "@/components/sections/cta-section"
import { Zap, Factory, Power, Settings } from "lucide-react"
import {FarrajPortfolio} from "@/components/sections/home"
const stats = [
  { value: "$10B+", label: "Portfolio Value" },
  { value: "20+", label: "Years Experience" },
  { value: "5", label: "Countries Served" },
  { value: "50+", label: "Major Projects" },
]

const solutions = [
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Comprehensive electrical design, installation, and maintenance for industrial facilities.",
    href: "/solutions#electrical",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description: "Advanced manufacturing solutions and process optimization for maximum efficiency.",
    href: "/solutions#manufacturing",
  },
  {
    icon: Power,
    title: "Power Distribution",
    description: "Reliable power distribution systems designed for critical industrial operations.",
    href: "/solutions#power",
  },
  {
    icon: Settings,
    title: "Automation & Control",
    description: "State-of-the-art automation systems to streamline your industrial processes.",
    href: "/solutions#automation",
  },
]

const featuredCaseStudies = [
  {
    id: "petrochemical-plant",
    title: "Petrochemical Plant Modernization",
    industry: "Petrochemicals",
    description: "Complete electrical system upgrade for a major petrochemical facility in Saudi Arabia.",
    image: "/petrochemical-plant.jpg",
    metrics: [
      { label: "Energy Savings", value: "35%" },
      { label: "Uptime Increase", value: "99.8%" },
    ],
    testimonial: "Farraj delivered exceptional results on time and within budget.",
  },
  {
    id: "power-generation",
    title: "Power Generation Facility",
    industry: "Power Generation",
    description: "Design and implementation of advanced control systems for a 500MW power plant.",
    image: "/power-generation-facility.jpg",
    metrics: [
      { label: "Efficiency Gain", value: "28%" },
      { label: "Project Value", value: "$2.5B" },
    ],
    testimonial: "Outstanding technical expertise and project management.",
  },
  {
    id: "oil-gas-infrastructure",
    title: "Oil & Gas Infrastructure",
    industry: "Oil & Gas",
    description: "Electrical infrastructure for offshore oil and gas production platform.",
    image: "/oil-gas-platform.jpg",
    metrics: [
      { label: "Safety Record", value: "100%" },
      { label: "Completion", value: "On Time" },
    ],
    testimonial: "Reliable partner for critical infrastructure projects.",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Industrial Solutions That Drive Transformation"
        subtitle="Electrical systems, manufacturing expertise, and strategic partnerships delivering $10B+ in value across the GCC"
        primaryCTA={{ text: "Explore Our Solutions", href: "/solutions" }}
        secondaryCTA={{ text: "View Case Studies", href: "/case-studies" }}
      />

      <StatsBar stats={stats} />
      <FarrajPortfolio />

      <SolutionsGrid solutions={solutions} />

      {/* Featured Case Studies */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Featured Case Studies
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover how we've helped leading companies achieve their industrial goals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Farraj */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Why Choose Farraj</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                ISO-certified processes and proven methodologies ensure the highest quality standards
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated support and long-term relationships built on trust and results
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Power className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regional Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep understanding of GCC market dynamics and regulatory requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8">Trusted by Leading Companies</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-12 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground"
              >
                Client Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Industrial Operations?"
        description="Let's discuss how our solutions can help you achieve your business goals"
        primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        secondaryCTA={{ text: "View All Solutions", href: "/solutions" }}
      />
    </>
  )
}
