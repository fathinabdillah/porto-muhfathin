import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      role: "Lead UX Designer",
      description: "Complete redesign of a fashion e-commerce platform resulting in 40% increase in conversion rates.",
      image: "/placeholder.svg",
      tags: ["UX Research", "Prototyping", "A/B Testing"],
      link: "/work/ecommerce-redesign"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      role: "Product Designer",
      description: "Designed a secure and intuitive mobile banking experience for 100K+ users.",
      image: "/placeholder.svg",
      tags: ["Mobile Design", "User Research", "Accessibility"],
      link: "/work/mobile-banking"
    },
    {
      id: 3,
      title: "SaaS Dashboard Interface",
      role: "UI/UX Designer",
      description: "Created a comprehensive dashboard for data analytics with complex data visualization.",
      image: "/placeholder.svg",
      tags: ["Data Visualization", "Enterprise UX", "Design System"],
      link: "/work/saas-dashboard"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Crafting Digital
              <span className="gradient-text block">Experiences</span>
              That Matter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm Muh Fathin Abdillah, a UX/UI designer passionate about creating user-centered designs 
              that solve real problems and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="font-medium group" asChild>
                <Link to="/work">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="font-medium" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my approach to solving complex design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Designing with purpose,
                <span className="gradient-text block">building with passion</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With 5+ years of experience in UX/UI design, I specialize in creating digital experiences 
                that are not only beautiful but also functional and user-centered. My approach combines 
                strategic thinking with creative problem-solving.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["User Research", "Interaction Design", "Prototyping", "Design Systems"].map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with passionate teams. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:hello@muhfathin.com" className="flex items-center">
                <span>hello@muhfathin.com</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
