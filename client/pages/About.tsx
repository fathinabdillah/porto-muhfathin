import { ArrowLeft, Download, MapPin, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function About() {
  const skills = [
    { name: "User Experience Design", level: 95 },
    { name: "User Interface Design", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "User Research", level: 88 },
    { name: "Design Systems", level: 82 },
    { name: "Figma", level: 95 },
    { name: "Adobe Creative Suite", level: 85 },
    { name: "HTML/CSS", level: 75 },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "Principle",
    "Framer",
    "InVision",
    "Miro",
    "Notion",
    "Hotjar",
    "Google Analytics",
    "Maze",
    "UsabilityHub",
  ];

  const experience = [
    {
      role: "Senior UX Designer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Leading design initiatives for enterprise software products, managing design systems, and mentoring junior designers.",
    },
    {
      role: "Product Designer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Designed mobile and web applications from concept to launch, conducted user research, and collaborated with cross-functional teams.",
    },
    {
      role: "UI/UX Designer",
      company: "Design Agency Co",
      period: "2019 - 2020",
      description:
        "Worked on diverse client projects including e-commerce, SaaS platforms, and mobile applications.",
    },
  ];

  const achievements = [
    "Increased user engagement by 45% through redesign of core product features",
    "Led design system implementation used by 20+ team members",
    "Conducted user research with 500+ participants across multiple projects",
    "Mentored 5 junior designers and UX interns",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 mb-6">
                <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">
                    Profile Photo
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>5+ years experience</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="mr-2 h-4 w-4" />
                  <span>Available for freelance</span>
                </div>
              </div>

              <Button className="w-full mt-6" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h1>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hi, I'm Muh Fathin Abdillah, a passionate UX/UI designer with
                  over 5 years of experience creating digital experiences that
                  matter. I believe great design should be both beautiful and
                  functional, solving real problems while delighting users.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My journey in design started with a curiosity about how things
                  work and a desire to make them better. I've had the privilege
                  of working with startups, established companies, and agencies,
                  designing everything from mobile apps to enterprise software.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not designing, you can find me exploring new design
                  trends, reading about psychology and human behavior, or
                  sharing knowledge with the design community through articles
                  and mentoring.
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Skills & Expertise
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Tools & Software
                </h2>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="px-3 py-1">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-1">
                        {job.role}
                      </h3>
                      <p className="text-accent font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">
            Key Achievements
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
