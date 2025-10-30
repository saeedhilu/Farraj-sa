import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Target, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our 20+ year track record, ISO certifications, and commitment to industrial excellence in the GCC region.",
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Farraj Industrial Group"
        subtitle="Two decades of engineering excellence and strategic partnerships across the GCC region"
        primaryCTA={{ text: "Join Our Team", href: "/careers" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        backgroundImage="/professional-industrial-team.jpg"
      />

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                Engineering Excellence Since 2003
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Farraj Industrial Group has been at the forefront of industrial transformation in the GCC region for
                  over two decades. We specialize in delivering comprehensive electrical systems, manufacturing
                  solutions, and industrial automation services to the region's most demanding industries.
                </p>
                <p>
                  Our portfolio spans $10B+ in project value across oil & gas, petrochemicals, power generation, and
                  manufacturing sectors. We pride ourselves on our technical excellence, strategic partnerships, and
                  deep understanding of regional market dynamics.
                </p>
                <p>
                  With ISO 9001, ISO 45001, and ISO 14001 certifications, we maintain the highest standards of quality,
                  safety, and environmental responsibility in every project we undertake.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/modern-industrial-facility.png"
                alt="Farraj Industrial Group facility"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  We pursue the highest standards in every project, ensuring quality and reliability
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  We embrace cutting-edge technologies to deliver forward-thinking solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  We build long-term relationships based on trust, transparency, and mutual success
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  We operate with honesty and ethical principles in all our business dealings
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Certifications & Compliance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Maintaining the highest industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-mono text-accent">ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quality Management Systems</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-mono text-accent">ISO 45001:2018</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Occupational Health & Safety</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-mono text-accent">ISO 14001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Environmental Management</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
