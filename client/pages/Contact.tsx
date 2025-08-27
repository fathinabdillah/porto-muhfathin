import { ArrowLeft, Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@muhfathin.com",
      href: "mailto:hello@muhfathin.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/muhfathin",
      color: "hover:text-blue-600"
    },
    {
      icon: Dribbble,
      name: "Dribbble", 
      href: "https://dribbble.com/muhfathin",
      color: "hover:text-pink-500"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/muhfathin",
      color: "hover:text-gray-800"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/muhfathin",
      color: "hover:text-blue-400"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

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
          
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always excited to work on new projects and collaborate with passionate teams. 
              Whether you need a complete design overhaul or just want to discuss ideas, 
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Design</SelectItem>
                          <SelectItem value="ux-research">UX Research</SelectItem>
                          <SelectItem value="design-system">Design System</SelectItem>
                          <SelectItem value="consulting">Design Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent/20 transition-all group ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="font-medium text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-0 shadow-lg bg-accent/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to messages within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
