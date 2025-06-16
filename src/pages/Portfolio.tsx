
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "TechStart E-Commerce Platform",
      category: "E-Commerce",
      description: "Increased online sales by 300% with a custom Shopify solution and advanced analytics.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      results: ["300% Sales Increase", "Mobile-First Design", "Payment Integration"],
      technologies: ["React", "Node.js", "Shopify", "Stripe"],
      timeline: "3 months"
    },
    {
      title: "FinanceFlow Web Application",
      category: "SaaS Platform",
      description: "Built a secure financial management platform serving 10,000+ users nationwide.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      results: ["10K+ Active Users", "Bank-Grade Security", "Real-time Analytics"],
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      timeline: "6 months"
    },
    {
      title: "HealthCare Provider Portal",
      category: "Healthcare",
      description: "Streamlined patient management with HIPAA-compliant web portal and appointment system.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      results: ["HIPAA Compliant", "Patient Portal", "Appointment System"],
      technologies: ["Angular", "C#", "SQL Server", "Azure"],
      timeline: "4 months"
    },
    {
      title: "Restaurant Chain Management",
      category: "Food & Beverage",
      description: "Unified ordering system across 50+ locations with real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      results: ["50+ Locations", "Real-time Sync", "Order Management"],
      technologies: ["React Native", "Firebase", "Express.js", "MongoDB"],
      timeline: "5 months"
    },
    {
      title: "Educational Learning Platform",
      category: "Education",
      description: "Interactive learning platform with video streaming and progress tracking for 5,000+ students.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      results: ["5K+ Students", "Video Streaming", "Progress Tracking"],
      technologies: ["Next.js", "Prisma", "Vercel", "Stripe"],
      timeline: "4 months"
    },
    {
      title: "Real Estate CRM System",
      category: "Real Estate",
      description: "Comprehensive CRM solution managing 1,000+ properties with automated lead generation.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      results: ["1K+ Properties", "Lead Generation", "CRM Integration"],
      technologies: ["Laravel", "MySQL", "Docker", "Redis"],
      timeline: "3 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 rounded-lg flex items-center justify-center">
                <span className="text-[#2C323C] font-bold text-lg">B</span>
              </div>
              <div>
                <span className="font-bold text-xl text-[#2C323C]">Bytecode</span>
                <div className="text-xs text-gray-600">IT Solutions PVT LTD</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigate('/')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Home</button>
              <button onClick={() => navigate('/about')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">About</button>
              <button onClick={() => navigate('/services')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-[#BBED50] font-medium">Portfolio</button>
              <button onClick={() => navigate('/contact')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Contact</button>
              <Button className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 font-semibold">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => navigate('/')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Home</button>
                <button onClick={() => navigate('/about')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">About</button>
                <button onClick={() => navigate('/services')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Services</button>
                <button onClick={() => navigate('/portfolio')} className="block px-3 py-2 text-[#BBED50] font-medium">Portfolio</button>
                <button onClick={() => navigate('/contact')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#BBED50]/20 text-[#2C323C] hover:bg-[#BBED50]/30 border-[#BBED50] mb-4">
            Our Work
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] mb-6">
            Success Stories & 
            <span className="bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 bg-clip-text text-transparent"> Project Showcase</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses 
            across various industries achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-[#BBED50]/20 text-[#2C323C] border-[#BBED50]">{project.category}</Badge>
                    <span className="text-sm text-gray-500">{project.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C323C] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-[#2C323C] mb-2">Key Results:</h4>
                      <div className="space-y-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <ArrowUp className="w-4 h-4 text-[#BBED50] mr-2" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#2C323C] mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C323C] mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Our projects have delivered measurable results across industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", color: "text-[#BBED50]" },
              { number: "50+", label: "Industries Served", color: "text-[#BBED50]" },
              { number: "98%", label: "Client Satisfaction", color: "text-[#BBED50]" },
              { number: "$2M+", label: "Client Revenue Generated", color: "text-[#BBED50]" }
            ].map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-lg text-[#2C323C] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C323C] to-[#2C323C]/90">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 text-lg px-8 py-6 font-semibold"
              onClick={() => navigate('/contact')}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#2C323C] text-lg px-8 py-6"
              onClick={() => navigate('/services')}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C323C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 rounded-lg flex items-center justify-center">
                  <span className="text-[#2C323C] font-bold text-lg">B</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-white">Bytecode</span>
                  <div className="text-xs text-gray-400">IT Solutions PVT LTD</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses with cutting-edge web development solutions across the USA.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>E-Commerce Solutions</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/about')}>About Us</button></li>
                <li>Our Team</li>
                <li>Careers</li>
                <li><button onClick={() => navigate('/contact')}>Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>hello@bytecode.com</li>
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94000</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bytecode IT Solutions PVT LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
