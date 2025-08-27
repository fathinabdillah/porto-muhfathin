import { ArrowLeft, ExternalLink, Calendar, User, Tag, Award } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CaseStudy() {
  const { id } = useParams();

  // Mock data - in a real app, this would be fetched based on the ID
  const caseStudy = {
    title: "E-Commerce Platform Redesign",
    subtitle: "Transforming online shopping experience for a fashion retail brand",
    role: "Lead UX Designer",
    duration: "4 months",
    team: "5 designers, 3 developers, 1 PM",
    tags: ["UX Research", "Prototyping", "A/B Testing", "E-commerce"],
    overview: "A complete redesign of a fashion e-commerce platform that resulted in a 40% increase in conversion rates and significantly improved user satisfaction scores.",
    
    problem: {
      title: "The Challenge",
      content: "The existing e-commerce platform was experiencing high bounce rates (78%) and low conversion rates (2.1%). Users reported difficulty finding products, a confusing checkout process, and poor mobile experience. Customer support was receiving 200+ complaints daily about website usability issues.",
      metrics: [
        "78% bounce rate",
        "2.1% conversion rate", 
        "200+ daily complaints",
        "Mobile traffic 65% but only 1.2% conversion"
      ]
    },

    process: {
      title: "Design Process",
      phases: [
        {
          title: "1. Research & Discovery",
          description: "Conducted user interviews, surveys, and competitive analysis to understand pain points.",
          deliverables: ["User personas", "Journey maps", "Competitive analysis", "Usability audit"]
        },
        {
          title: "2. Ideation & Concept",
          description: "Generated solutions through design workshops and stakeholder alignment sessions.",
          deliverables: ["User flows", "Information architecture", "Wireframes", "Design concepts"]
        },
        {
          title: "3. Design & Prototype", 
          description: "Created high-fidelity designs and interactive prototypes for user testing.",
          deliverables: ["UI designs", "Design system", "Interactive prototypes", "Micro-interactions"]
        },
        {
          title: "4. Test & Iterate",
          description: "Conducted usability testing and A/B tests to validate design decisions.",
          deliverables: ["Usability test results", "A/B test analysis", "Design iterations", "Final designs"]
        }
      ]
    },

    solution: {
      title: "The Solution",
      content: "We redesigned the entire user experience with a focus on intuitive navigation, streamlined checkout, and mobile-first approach. Key improvements included enhanced product discovery, simplified cart management, and a one-page checkout process.",
      features: [
        {
          title: "Enhanced Product Discovery",
          description: "Improved search functionality with filters, visual search, and personalized recommendations."
        },
        {
          title: "Streamlined Checkout",
          description: "Reduced checkout from 5 steps to 2, with guest checkout option and multiple payment methods."
        },
        {
          title: "Mobile-First Design",
          description: "Responsive design optimized for mobile devices with touch-friendly interactions."
        },
        {
          title: "Personalization Engine",
          description: "AI-powered product recommendations based on browsing history and preferences."
        }
      ]
    },

    results: {
      title: "Results & Impact",
      content: "The redesign exceeded all success metrics, with significant improvements in user engagement, conversion rates, and customer satisfaction. The client saw immediate positive impact on their business KPIs.",
      metrics: [
        {
          label: "Conversion Rate",
          before: "2.1%",
          after: "6.8%",
          improvement: "+224%"
        },
        {
          label: "Bounce Rate", 
          before: "78%",
          after: "45%",
          improvement: "-42%"
        },
        {
          label: "Mobile Conversion",
          before: "1.2%",
          after: "5.9%",
          improvement: "+392%"
        },
        {
          label: "User Satisfaction",
          before: "2.3/5",
          after: "4.6/5",
          improvement: "+100%"
        }
      ],
      testimonial: {
        quote: "The redesign transformed our business. We saw immediate improvements in sales and customer satisfaction. The team's attention to detail and user-centered approach was exceptional.",
        author: "Sarah Johnson",
        role: "VP of Digital Experience"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <Link 
            to="/work" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {caseStudy.subtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium">{caseStudy.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{caseStudy.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Tag className="mr-2 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Team</p>
                  <p className="font-medium">{caseStudy.team}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {caseStudy.overview}
          </p>
          
          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-muted rounded-2xl mb-16 flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Project Hero Image</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-destructive/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-4 text-destructive font-bold">1</span>
            {caseStudy.problem.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {caseStudy.problem.content}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.problem.metrics.map((metric, index) => (
              <Card key={index} className="border-destructive/20">
                <CardContent className="p-4 text-center">
                  <p className="font-bold text-destructive">{metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 text-accent font-bold">2</span>
            {caseStudy.process.title}
          </h2>
          
          <div className="space-y-8">
            {caseStudy.process.phases.map((phase, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <Badge key={idx} variant="secondary">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 text-accent font-bold">3</span>
            {caseStudy.solution.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {caseStudy.solution.content}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.solution.features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 text-green-600 font-bold">4</span>
            {caseStudy.results.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {caseStudy.results.content}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {caseStudy.results.metrics.map((metric, index) => (
              <Card key={index} className="border-green-500/20 bg-green-500/5">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="font-bold text-green-600 text-lg">{metric.improvement}</p>
                  <p className="text-xs text-muted-foreground">{metric.before} → {metric.after}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Award className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <blockquote className="text-lg font-medium mb-4">
                "{caseStudy.results.testimonial.quote}"
              </blockquote>
              <cite className="text-sm opacity-80">
                {caseStudy.results.testimonial.author}, {caseStudy.results.testimonial.role}
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">View More Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
