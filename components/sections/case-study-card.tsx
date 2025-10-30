import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface CaseStudy {
  id: string
  title: string
  industry: string
  description: string
  image: string
  metrics: {
    label: string
    value: string
  }[]
  testimonial?: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary">{caseStudy.industry}</Badge>
        </div>
        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
        <CardDescription className="leading-relaxed">{caseStudy.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold font-mono text-accent">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
        {caseStudy.testimonial && (
          <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground mb-4">
            {caseStudy.testimonial}
          </blockquote>
        )}
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href={`/case-studies/${caseStudy.id}`}>View Full Case Study</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
