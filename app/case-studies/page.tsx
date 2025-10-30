import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { CaseStudyCard } from "@/components/sections/case-study-card"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore our $10B+ portfolio of successful industrial projects across oil & gas, petrochemicals, and manufacturing sectors.",
}

const caseStudies = [
  {
    id: "petrochemical-plant",
    title: "Petrochemical Plant Modernization",
    industry: "Petrochemicals",
    description:
      "Complete electrical system upgrade for a major petrochemical facility in Saudi Arabia, improving efficiency and safety.",
    image: "/petrochemical-plant.jpg",
    metrics: [
      { label: "Energy Savings", value: "35%" },
      { label: "Uptime Increase", value: "99.8%" },
    ],
    testimonial:
      "Farraj delivered exceptional results on time and within budget. Their technical expertise was invaluable.",
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
    testimonial: "Outstanding technical expertise and project management throughout the entire implementation.",
  },
  {
    id: "oil-gas-infrastructure",
    title: "Oil & Gas Infrastructure",
    industry: "Oil & Gas",
    description: "Electrical infrastructure for offshore oil and gas production platform with zero safety incidents.",
    image: "/oil-gas-platform.jpg",
    metrics: [
      { label: "Safety Record", value: "100%" },
      { label: "Completion", value: "On Time" },
    ],
    testimonial: "Reliable partner for critical infrastructure projects. Exceeded all safety and quality standards.",
  },
  {
    id: "manufacturing-automation",
    title: "Manufacturing Automation",
    industry: "Manufacturing",
    description:
      "Complete automation overhaul for a large-scale manufacturing facility, increasing productivity by 40%.",
    image: "/automated-manufacturing-line.jpg",
    metrics: [
      { label: "Productivity", value: "+40%" },
      { label: "Defect Rate", value: "-60%" },
    ],
    testimonial: "The automation solutions transformed our operations and significantly improved our bottom line.",
  },
  {
    id: "water-treatment",
    title: "Water Treatment Plant",
    industry: "Utilities",
    description: "SCADA system implementation for a major water treatment facility serving 2 million residents.",
    image: "/water-treatment-plant.png",
    metrics: [
      { label: "Capacity", value: "2M People" },
      { label: "Efficiency", value: "+32%" },
    ],
    testimonial: "Farraj's expertise in utility automation helped us achieve operational excellence.",
  },
  {
    id: "refinery-upgrade",
    title: "Refinery Electrical Upgrade",
    industry: "Oil & Gas",
    description: "Major electrical system upgrade for a 250,000 bpd refinery with minimal downtime.",
    image: "/oil-refinery.jpg",
    metrics: [
      { label: "Downtime", value: "<48hrs" },
      { label: "Capacity", value: "250K bpd" },
    ],
    testimonial: "Impressive planning and execution. The project was completed ahead of schedule.",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Case Studies"
        subtitle="Discover how we've helped leading companies achieve their industrial transformation goals"
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        backgroundImage="/industrial-success-stories.jpg"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
