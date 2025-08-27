import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      role: "Lead UX Designer",
      description: "Complete redesign of a fashion e-commerce platform resulting in 40% increase in conversion rates.",
      image: "/placeholder.svg",
      tags: ["UX Research", "Prototyping", "A/B Testing"],
      link: "/work/ecommerce-redesign",
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      role: "Product Designer", 
      description: "Designed a secure and intuitive mobile banking experience for 100K+ users.",
      image: "/placeholder.svg",
      tags: ["Mobile Design", "User Research", "Accessibility"],
      link: "/work/mobile-banking",
      year: "2023"
    },
    {
      id: 3,
      title: "SaaS Dashboard Interface",
      role: "UI/UX Designer",
      description: "Created a comprehensive dashboard for data analytics with complex data visualization.",
      image: "/placeholder.svg", 
      tags: ["Data Visualization", "Enterprise UX", "Design System"],
      link: "/work/saas-dashboard",
      year: "2023"
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      role: "UX Designer",
      description: "Designed a patient portal that improved appointment booking efficiency by 60%.",
      image: "/placeholder.svg",
      tags: ["Healthcare UX", "Accessibility", "User Testing"],
      link: "/work/healthcare-portal", 
      year: "2022"
    },
    {
      id: 5,
      title: "EdTech Learning Platform",
      role: "Product Designer",
      description: "Created an engaging learning platform for K-12 students with gamification elements.",
      image: "/placeholder.svg",
      tags: ["EdTech", "Gamification", "Mobile First"],
      link: "/work/edtech-platform",
      year: "2022"
    },
    {
      id: 6,
      title: "Brand Identity System",
      role: "Brand Designer",
      description: "Developed a comprehensive brand identity and design system for a tech startup.",
      image: "/placeholder.svg",
      tags: ["Brand Design", "Design System", "Visual Identity"],
      link: "/work/brand-identity",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              My Work
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of projects that showcase my design process, problem-solving approach, 
              and the impact of user-centered design on business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {project.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Link 
                    to={project.link}
                    className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                  >
                    View Case Study
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
